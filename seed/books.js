const db = require('../db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const { Publisher, Book } = require('../models') //with models/index.js
// const Publisher  = require('../models/publisher') //without index
// const Book  = require('../models/book') //without index


const main = async () => {
    const penguin = await Publisher.find({ name: 'Penguin' })
    const harperCollins = await Publisher.find({ name: 'HarperCollins' })
  
    const books = [
      {
        title: 'First Person Singular',
        author: 'Haruki Murakami',
        published_date: '2023',
        publisher_id: penguin[0]._id
      },
     {
        title: 'The Count of Monte Cristo',
        author: 'Alexandre Dumas',
        published_date: '1994',
        publisher_id: penguin[0]._id
      },
      {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        published_date: '1951',
        publisher_id: penguin[0]._id
      },
      {
        title: 'Zen and the Art of Motorcycle Maintenance',
        author: 'Robert M. Pirsig',
        published_date: '1999',
        publisher_id: harperCollins[0]._id
      },
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        published_date: '1988',
        publisher_id: harperCollins[0]._id
      }
    ]
  
    await Book.insertMany(books)
    console.log('Created books with publishers!')
  }
  
  const run = async () => {
    await main()
    //closes database
    db.close()
  }
  
  run()