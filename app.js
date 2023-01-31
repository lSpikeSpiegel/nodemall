const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
dotenv.config('./env')
const uri = process.env.dbUri

const client = new MongoClient(uri)
const run = async () => {
  try {
    const db = client.db('sample_airbnb')
    const customers = db.collection('listingsAndReviews')
    const query = { name: 'Ribeira Charming Duplex' }
    const customerName = await customers.findOne(query)
    console.log(customerName)
  } finally {
    await client.close()
  }
}

run().catch(console.dir)
