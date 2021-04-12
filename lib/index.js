"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDataset = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
const sendResponse = (response, statusCode, body) => {
    response.send({
        statusCode,
        body: JSON.stringify(body)
    });
};
//クラウドファンクションズで関数を外部から使う時はexportをする
//詳しくはfirebaseの公式ドキュメントの仕組みにて
exports.addDataset = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        sendResponse(res, 405, { error: 'Invalid Request' });
    }
    else {
        const dataset = req.body;
        for (const key of Object.keys(dataset)) {
            const data = dataset[key];
            await db.collection('questions').doc(key).set(data);
        }
        sendResponse(res, 200, { message: 'successfully' });
    }
});
//# sourceMappingURL=index.js.map