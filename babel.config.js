module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/config': './src/config',
          '@/models': './src/models',
          '@/navigator': './src/navigator',
        },
      },
    ],
  ],
};
