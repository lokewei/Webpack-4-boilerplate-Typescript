import './styles/style.sass';
import sync from './sync';

console.log('hello, world');

const testMessage: string = 'TypeScript works';

console.log(testMessage);

console.log(sync);

import(/* webpackChunkName: "asyncModule" */ './async').then(({ default: xxx }) => {
  console.log(xxx);
});

