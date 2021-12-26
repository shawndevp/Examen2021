module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '296395284c051b13cf0b675eb40b8fdd'),
  },
});
