const mongoose = require('mongoose');

const connectDB = async () => {
	try{
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connection Granted: ${conn.connection.host}`.yellow.bold);
	} catch(err) {
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB; 



//mongodb+srv://adminuser:adminuser@learnfullstack.clxviry.mongodb.net/goal-checker-app?retryWrites=true&w=majority