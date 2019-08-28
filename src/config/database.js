module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bossabox',
  define: {
    timestamps: true,
    underscored: true,
    uderscoredAll: true,
  },
};
