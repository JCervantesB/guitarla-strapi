module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgresql-appsalon.alwaysdata.net'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'appsalon_strapi'),
      user: env('DATABASE_USERNAME', 'appsalon'),
      password: env('DATABASE_PASSWORD', 'WebCompleto2022'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
