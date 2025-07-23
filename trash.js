const mongoose = require('mongoose');
require('dotenv').config();

// Test database connection
const dbConnectionString = process.env.DB_CONNECTION_STRING;

console.log('Testing database connection...');
console.log('Connection string exists:', !!dbConnectionString);

if (!dbConnectionString) {
    console.error('❌ DB_CONNECTION_STRING environment variable is not set');
    console.log('Create a .env file with:');
    console.log('DB_CONNECTION_STRING=mongodb://localhost:27017/bucket-list');
    process.exit(1);
}

mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Connected to database successfully!');
        
        // Test if we can query the friends collection
        const Friend = require('./server/models/friend');
        
        return Friend.countDocuments();
    })
    .then(count => {
        console.log(`📊 Found ${count} friends in the database`);
        
        if (count === 0) {
            console.log('💡 The database is empty. You may need to seed it with data.');
        }
        
        process.exit(0);
    })
    .catch(error => {
        console.error('❌ Database connection or query failed:', error.message);
        process.exit(1);
    });
