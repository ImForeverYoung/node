import express from 'express'
import mongoose from 'mongoose'
import pkg from 'mongodb';
const {MongoClient} = pkg;


import authRoutes from './routes/auth.routes.js'

const PORT = process.env.PORT || 5000


const app = express()
app.use(express.json())

app.use('/auth', authRoutes)


const start =  () => {
  app.listen(PORT, async () => {
      try{
        // const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false, });
        await mongoose.connect(`mongodb://localhost:27017/myapp`, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        })
        // mongoClient.connect(function(err, client){
      
        //   const db = client.db("myapp");
        //   console.log(db)
          
          
        // });
        console.log(`Server is running on PORT: ${PORT}`)
      } catch(e){
        console.log(e)
        process.exit(1)
      }
      
  })
}

start()
