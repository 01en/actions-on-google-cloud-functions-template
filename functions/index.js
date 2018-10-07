'use strict';

const {
    dialogflow
} = require('actions-on-google');

const functions = require('firebase-functions');
const app = dialogflow({
    debug: true
});
exports.main = functions.https.onRequest(app);

app.intent('Default Welcome Intent', conv => {
    conv.ask("Let's start develop Actions on Google!")
})
