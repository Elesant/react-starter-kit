import push from 'git-push';

const remote = {
  name: 'origin',
  url: 'https://github.com/Elesant/react-starter-kit',
  branch: 'gh-pages'
};

export default async () => {
  await require('./build')();
  await new Promise(resolve => push('./build', remote, resolve));
};
