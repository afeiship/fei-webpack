require('babel-core/register');

module.exports = (env) => {
  return require(`./build/webpack.config.${env}.babel.js`).default(env);
};
