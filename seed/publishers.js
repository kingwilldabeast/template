const db = require('../db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const { Publisher } = require('../models') //with models/index.js
// const Publisher  = require('../models/publisher') //without index


const main = async () => {
   
   
   
    const publishers = [
        {
            name: 'Penguin',
            location: '375 Hudson St, New York, NY 10014',
            url: 'https://penguin.com'
          },
          {
            name: 'HarperCollins',
            location: '10 E 53rd St, New York, NY 10022',
            url: 'https://www.harpercollins.com'
          }
    ]

    await Publisher.insertMany(publishers)
    console.log('Created publishers!')
}

const run = async () => {
    await main() 
    //closes database
    db.close()
}

run ()