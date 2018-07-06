require('babel-core/register');
require('next-join');

module.exports = (env) => {
  const filename = nx.join([ env.type, env.mode ],'-');
  console.log(filename);
  return require(`./build/webpack.config.${filename}.babel.js`).default(env);
};
