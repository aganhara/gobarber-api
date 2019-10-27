require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true, // Seta padrão para nome da tabela com underscore
    underscoredAll: true, // Seta o padrão de nome de coluna user_group
  },
};
