const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port =process.env.PORT|| 5000;
require('dotenv').config()

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qw6mrpu.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
  try{

  }
  finally{
   await client.connect()
   const equationtionCollection=client.db('equation-calc-drag-drop').collection('equation-alphabed-value')

   app.get('/getAlphabets', async(req, res )=>{
    const query={};
    const cursor=equationtionCollection.find(query);
    const equation=await cursor.toArray();
    res.send(equation)
   })
  }
}
 
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hey! Youre on the server.')
})

app.listen(port, () => {
  console.log(`Hello From equation! ${port}`)
})