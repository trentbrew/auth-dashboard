const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

const db = admin.firestore()

exports.AddUserRole = functions.auth.user().onCreate(async (authUser) => {
  if (authUser.email) {
    console.log("entered function!!!");
    const customClaims = {
      admin: true,
    };
    try {
      var _ = await admin.auth().setCustomUserClaims(authUser.uid, customClaims);
      console.log("CUSTOM CLAIMS: " + customClaims);
      return db.collection("roles").doc(authUser.uid).set({
        email: authUser.email,
        role: customClaims
      })
    } catch (error) {
      console.error("Here's where the async function poops itself");
      console.log(error)
    }
  }
});