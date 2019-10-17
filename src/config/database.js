module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // Seta padrão para nome da tabela com underscore
    underscoredAll: true, // Seta o padrão de nome de coluna user_group
  },
};
