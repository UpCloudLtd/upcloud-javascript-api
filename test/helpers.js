import 'babel-polyfill';

const log = process.env.NODE_ENV === 'development' ? console.log : () => void 0;

const upcloud = require('../src');

const username = process.env.UPCLOUD_API_TEST_USER;
const password = process.env.UPCLOUD_API_TEST_PASSWORD;

const serverApi = new upcloud.ServerApi();
serverApi.apiClient.authentications.baseAuth.username = username;
serverApi.apiClient.authentications.baseAuth.password = password;

const storageApi = new upcloud.StorageApi();
storageApi.apiClient.authentications.baseAuth.username = username;
storageApi.apiClient.authentications.baseAuth.password = password;

const TIMEOUT = process.env.UPCLOUD_API_TEST_TIMEOUT || 15000;

const servers = [];

const serverData = {
  server: {
    zone: 'fi-hel2',
    title: 'Test server',
    hostname: 'debian.example.com',
    password_delivery: 'none',
    plan: '1xCPU-1GB',
    storage_devices: {
      storage_device: [
        {
          action: 'clone',
          title: 'Debian from a template',
          size: 30,
          storage: '01000000-0000-4000-8000-000020030100',
          tier: 'maxiops',
        },
      ],
    },
  },
};

const waitForServerState = serverId => async (state, timeout = TIMEOUT) => {
  log(`Waiting for a server ${state} with timeout ${timeout}...`);
  const server = (await serverApi.serverDetails(serverId)).server;
  if (server.state === state) {
    log(`Server ${serverId} ${state}.`);
    return server;
  } else {
    return await new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(waitForServerState(serverId)(state, timeout)),
        timeout,
      );
    });
  }
};

let createdServers = [];

const createServer = async (data = serverData) => {
  const serverList = (await serverApi.listServers()).servers.server;
  if (serverList.length >= 10) {
    log('Cleanup servers...');
    await Promise.all(
      createdServers.map(server => server.uuid).map(deleteServer),
    );
    createdServers = [];
  }

  let { server } = await serverApi.createServer(data);

  server = await waitForServerState(server.uuid)('started');
  createdServers.push(server);

  return server;
};

const stopServer = serverId => {
  log(`Stopping server ${serverId}`);
  return serverApi
    .stopServer(serverId, {
      stop_server: {
        stop_type: 'soft',
        timeout: '60',
      },
    })
    .catch(() => serverId)
    .then(() => waitForServerState(serverId)('stopped', TIMEOUT / 5));
};

const startServer = serverId => {
  return serverApi
    .startServer(serverId)
    .then(() => waitForServerState(serverId)('started'))
    .catch(console.error);
};

const deleteServer = serverId => {
  return stopServer(serverId)
    .then(server => serverApi.deleteServer(server.uuid))
    .catch(console.error);
};

const deleteCreatedServers = async () => {
  return await Promise.all(
    createdServers.map(server => server.uuid).map(deleteServer),
  );
};

const deleteAllServers = async () => {
  return serverApi
    .listServers()
    .then(({ servers }) =>
      Promise.all(servers.server.map(server => server.uuid).map(deleteServer)),
    );
};

const deleteStorage = async storageId => {
  try {
    return await storageApi.deleteStorage(storageId);
  } catch (e) {
    return await deleteStorage(storageId);
  }
};

const deleteAllStorages = () => {
  return storageApi
    .listStorageTypes('private')
    .then(({ storages }) =>
      Promise.all(
        storages.storage.map(storage => storage.uuid).map(deleteStorage),
      ),
    );
};

module.exports = {
  serverData,
  createServer,
  stopServer,
  deleteServer,
  deleteAllServers,
  deleteStorage,
  deleteAllStorages,
};
