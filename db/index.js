
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const uri = `mongodb+srv://Anish:${encodeURIComponent('!@bikachan!@')}@development-cluster.xslwo.mongodb.net/email_editor?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;