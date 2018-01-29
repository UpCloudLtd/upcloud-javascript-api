import { deleteAllServers, deleteAllStorages } from './helpers';

const deleteAll = () => deleteAllServers().then(deleteAllStorages);

before(() => {
  // console.log('Before all...');
  return deleteAll().then(() => console.log('Tests were started'));
});

after(() => {
  // console.log('After all...');
  return deleteAll().then(() =>
    console.log(
      'All servers were deleted. All storages were deleted. Tests were finished',
    ),
  );
});
