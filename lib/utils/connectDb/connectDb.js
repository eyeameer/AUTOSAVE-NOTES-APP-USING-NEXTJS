import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;
const options = {        
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
};

let dbPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

 function connectToDatabase() {
  if (!dbPromise) {
    console.log('Creating a new connection');
    dbPromise = mongoose.connect(uri, options);
  } else {
    console.log('Using existing connection');
  }
  return  dbPromise;
}

export default connectToDatabase;