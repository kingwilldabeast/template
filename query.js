// Write your queries here


const db = require('./db')
const { Publisher, Book } = require('./models')

//Read
const findData = async () => {
    const result = await Publisher.findOne()
    const result2 = await Employee.find({ company_id: "664fab1bf2163daaf59b18ce" }, {first_name:1,last_name:1})
    const resul3 = await Airport.findById( "664fc164cccff3db0a86e529")
    console.log(result)
  }

//Create
const createData = async () => {
    const publisher = await Publisher.findOne()
  
    let newObject = await Book.create({
        title: 'Brothers Karamazov',
        author: 'Fyodor Dostoyevsky',
        published_date: '1879-08-02',
        publisher_id: publisher._id
    })
    console.log(newObject)
  }

//Update
const updateData = async () => {
    const updated = await Book.updateOne(
        { title: 'The Lord of the Rings' },
        // { title: 'The Fellowship of the Ring' }
        {$set: {title: 'The Fellowship of the Ring' }}
    )
    console.log(updated)
}

//Delete
const deleteData = async () => {
    let deleted = await Book.deleteOne({ title: 'Brothers Karamazov' })
    console.log(deleted)
}
  
  async function main() {
    try {
        // await createData()
        // await updateData()
        // await deleteData()
        await findData()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
  }
  
  main()