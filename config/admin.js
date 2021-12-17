module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b0be9b0ecb4d2b481ab496fb2e2d57cc'),
  },
});
