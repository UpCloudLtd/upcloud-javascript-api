const upcloud = require('../src');

const serverApi = new upcloud.ServerApi();
serverApi.apiClient.authentications.baseAuth.username =
  process.env.UPCLOUD_API_TEST_USER;
serverApi.apiClient.authentications.baseAuth.password =
  process.env.UPCLOUD_API_TEST_PASSWORD;

const storageApi = new upcloud.StorageApi();
storageApi.apiClient.authentications.baseAuth.username =
  process.env.UPCLOUD_API_TEST_USER;
storageApi.apiClient.authentications.baseAuth.password =
  process.env.UPCLOUD_API_TEST_PASSWORD;

const TIMEOUT = process.env.UPCLOUD_API_TEST_TIMEOUT || 30000;

const servers = [];

const serverData = {
  server: {
    zone: 'fi-hel1',
    title: 'Firewall test server',
    hostname: 'debian.example.com',
    plan: '2xCPU-2GB',
    storage_devices: {
      storage_device: [
        {
          action: 'clone',
          title: 'Debian from a template',
          size: 50,
          storage: '01000000-0000-4000-8000-000020030100',
          tier: 'maxiops',
        },
      ],
    },
  },
};

const waitForServerState = serverId => state => {
  console.log(`Waiting for a server ${state}...`);
  return serverApi.serverDetails(serverId).then(({ server }) => {
    if (server.state === state) {
      console.log(`Server ${serverId} ${state}.`);
      return server;
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(waitForServerState(serverId)(state)), TIMEOUT);
      });
    }
  });
};

const createServer = (data = serverData) => {
  const server = serverApi
    .createServer(data)
    .then(({ server }) => waitForServerState(server.uuid)('started'))
    .catch(console.error);
  return server;
};

const stopServer = serverId => {
  return serverApi
    .stopServer(serverId, {
      stop_server: {
        stop_type: 'soft',
        timeout: '60',
      },
    })
    .then(() => waitForServerState(serverId)('stopped'))
    .catch(console.error);
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

const deleteAllServers = () => {
  return serverApi
    .listServers()
    .then(({ servers }) =>
      Promise.all(servers.server.map(server => server.uuid).map(deleteServer)),
    );
};

const deleteStorage = storageId => {
  return storageApi.deleteStorage(storageId).catch(console.error);
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
  createServer,
  deleteServer,
  deleteAllServers,
  deleteStorage,
  deleteAllStorages,
};
