module.exports = {
  webPort: process.env.PORT || 9000,
  dbConfig: {
    port: process.env.DBPORT || 28015,
    host: process.env.DBHOST || 'localhost',
    db: process.env.DBNAME || 'productionapi'
  },
  jwtSecret: process.env.JWT || 'secretboi',
  salt: process.env.SALT || 'Gq0twQYeoP6YWZY7iBc!NyhVavauPHB5Q6jPU$LMzCxw@SM&y$udLVnmF0qu!%XR'
}
