import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb+srv://cordeiromariano17:IYwNNzsYcUPfz0vj@shootstats.elnuaer.mongodb.net/');
    console.log('DB is connected');
  } catch (error) {
    console.log(error);
  }
};
