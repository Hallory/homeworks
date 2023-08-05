const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js', // Точка входа вашего приложения
  output: {
    path: path.resolve('./dist'), // Путь к папке, где будут сохранены собранные файлы
    filename: 'bundle.js', // Имя собранного файла
  },
  experiments: {
    topLevelAwait: true,
  },
};