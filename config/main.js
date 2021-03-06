module.exports = {
  port: 3000, // Port where serve the app
  api: 'https://login.lisk.io/api', // Lisk API to use
  mongo_url: 'mongodb://localhost:27017/transparency-reports',
  secret: '\x88\xdd\x16\xf3s\n\x80\xbfT\xa2&\r\xaa\xec+r\xe8tbn\xd4f\xe4\xed0.\xe9\x19\xffV7', // JWT secret key, generate with python os.urandom()
  jwtExpiresIn: 10080, // JWT expiration in seconds
  address: '17293791265922873918L' // Address where send transactions to verify account
}
