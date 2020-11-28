'use strict';

const admin = require('firebase-admin');
module.exports = () => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_AUTH_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: process.env.FIREBASE_AUTH_DATABASE_URL.replace(/\\n/g, '\n'),
  });
  strapi.firebase = admin;
};
