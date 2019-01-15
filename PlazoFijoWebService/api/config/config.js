module.exports = {
    development: {
        username: 'root',
        password: '150150',
        database: 'PlazoFijo',
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,
        define: {
            //prevent sequelize from pluralizing table names
            freezeTableName: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
    },
    test: {
      dialect: "sqlite",
      storage: ":memory:"
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mysql',
      use_env_variable: 'DATABASE_URL'
    }
  };