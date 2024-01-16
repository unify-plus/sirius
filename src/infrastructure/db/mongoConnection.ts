import mongoose from 'mongoose';

async function connectToDb() {
  try {
    mongoose.set('strictQuery', true);
    const connectionString = process.env.MONGO_CONNECTION_STRING as string;
    if (!connectionString) {
      throw new Error('MONGO_CONNECTION_STRING environment variable not set');
    }
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { connectToDb };
