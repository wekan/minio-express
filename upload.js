//var Minio = require('minio');
var Minio = require('@wekanteam/minio');
const { MongoClient } = require('mongodb');

// Instantiate the minio client with the endpoint
// and access keys as shown below.
var minioClient = new Minio.Client({
    endPoint: process.env.ENDPOINT,
    port: process.env.PORT,
    useSSL: process.env.USESSL,
    accessKey: process.env.KEY,
    secretKey: process.env.SECRET
});

// Connection URL
//const url = 'mongodb://localhost:27017';
const url = 'mongodb://localhost:4001';
const client = new MongoClient(url);

// Database Name
//const dbName = 'wekan';
const dbName = 'meteor';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  //const findResult = await collection.find({}).toArray();
  const findResult = await collection.findOne({});
  console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

/*
// File that needs to be uploaded.
var file = '../../Downloads/file.tar.gz'

var metaData = {
    'Content-Type': 'application/octet-stream',
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
}

minioClient.fPutObject('wekan', 'file.tar.gz', file, metaData, function(err, etag) {
  if (err) return console.log(err)
  console.log('File uploaded successfully.')
});
*/
