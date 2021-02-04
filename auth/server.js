const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const GithubStrategy = require('passport-github').Strategy
const http = require('http')
const server = http.createServer(app)
const port = process.env.PORT || 3000

console.log(process.env.CLIENT_ID)

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/user/sign/callback',
    },
    // eslint-disable-next-line func-names
    function (accessToken, refreshToken, profile, done) {
      // returning profile
      // eslint-disable-next-line no-console
      console.log(profile)
      done(null, profile)
    },
  ),
)

// Express and Passport Session
app.use(
  session({
    secret: 'batatinha',
    proxy: true,
    resave: true,
    saveUninitialized: true,
  }),
)
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user) // null is for errors
})

// Start the GitHub Login
app.get('/user/sign/', passport.authenticate('github'))

// GitHub will call this URL
app.get(
  '/user/sign/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/')
  },
)

app.get('/', function (req, res) {
  let html = ''

  if (req.isAuthenticated()) {
    // eslint-disable-next-line no-multi-str
    html += "<ul> <li><a href='/logout'>logout</a></li></ul>"
    html += '<p>authenticated as user:</p>'
    html += `<pre>${JSON.stringify(req.user, null, 4)}</pre>`
  } else {
    html += "<ul><li><a href='/user/sign/'>Login with GitHub</a></li></ul>"
  }

  res.send(html)
})

app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

// eslint-disable-next-line consistent-return
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}

app.get('/protected', ensureAuthenticated, function (req, res) {
  res.send('access granted')
})

console.log('NODE_ENV is', process.env.NODE_ENV)

server.listen(port, () => console.log(`Listening on port ${port}`))
