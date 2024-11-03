import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressSession from 'express-session';

dotenv.config();

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/oauth`,
    },
    (accessToken, refreshToken, profile, done) => {
      profile.accessToken = accessToken; 
      if (profile.emails[0].verified && profile.emails[0].value.endsWith('@gmail.com')) {
        return done(null, profile);
      }
      return done(null, false);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth giriş rotaları
app.get('/oauth', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/calendar.readonly'] }));

app.get(
  '/oauth',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});


app.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    const accessToken = req.user.accessToken; 
    res.send(`
      <h1>Hoş geldin, ${req.user.displayName}!</h1>
      <button onclick="getCalendarEvents('${accessToken}')">Takvim Olaylarını Göster</button>
      <a href="/logout">Çıkış Yap</a>
      `);
  } else {
    res.send('<h1>Google ile Giriş Yap</h1><a href="/oauth">Giriş Yap</a>');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
