module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cors: {
   origin : "*"
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1329e66934feef917d7023e5fce72ab3'),
    },
  },
});
