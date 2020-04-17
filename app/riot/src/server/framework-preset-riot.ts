// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack';

export function webpack(config: Configuration) {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.riot/,
          use: [
            {
              loader: require.resolve('@riotjs/webpack-loader'),
              options: {
                hot: true, // set it to true if you are using hmr
                // add here all the other @riotjs/compiler options riot.js.org/compiler
                // template: 'pug' for example
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        //'@riotjs/compiler': '@riotjs/compiler/dist/index.esm.js',
      },
    },
  };
}
