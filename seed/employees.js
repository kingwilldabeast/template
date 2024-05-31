const db = require('../db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const { Company, Employee } = require('../models') //with models/index.js
// const Company  = require('../models/company') //without index
// const Employee  = require('../models/employee') //without index


const main = async () => {
    const dunderMifflin = await Company.find({ company_name: 'Dunder Mifflin' })
    const facebook = await Company.find({ company_name: 'Facebook' })
    const apple = await Company.find({ company_name: 'Apple' })
  
    const employees = [
        {
        company_id: dunderMifflin[0]._id, 
        first_name: "Dwight",
        last_name: "Shrute",
        email: "DShrute@dm.com",
        job_title: "salesman",
        salary_in_usd: 65000,
        address: {
            street: "123 Beet St",
            city: "Scranton",
            state: "PA",
            zip: 20010
        }
    },
    {
        company_id: dunderMifflin[0]._id, 
        first_name: "Pam",
        last_name: "Beesly",
        email: "PBeesly@dm.com",
        job_title: "receptionist",
        salary_in_usd: 35000,
        address: {
            street: "123 Elm St",
            city: "Scranton",
            state: "PA",
            zip: 20010
        }
    },
    {
        company_id: dunderMifflin[0]._id, 
        first_name: "Jim",
        last_name: "Halpert",
        email: "JHalpert@dm.com",
        job_title: "salesman",
        salary_in_usd: 45000,
        address: {
            street: "123 Elm St",
            city: "Scranton",
            state: "PA",
            zip: 20010
        }
    },
    {
        company_id: facebook[0]._id, 
        first_name: "Mark",
        last_name: "Zuckerberg",
        email: "MZuck@fb.com",
        job_title: "CEO",
        salary_in_usd: 265000,
        address: {
            street: "345 Silicon St",
            city: "Sacramento",
            state: "CA",
            zip: 90010
        }
    },
    {
        company_id: facebook[0]._id, 
        first_name: "Bill",
        last_name: "Gates",
        email: "BGates@fb.com",
        job_title: "COO",
        salary_in_usd: 345000,
        address: {
            street: "345 Micro St",
            city: "Sacramento",
            state: "CA",
            zip: 90011
        }
    },
    {
        company_id: facebook[0]._id, 
        first_name: "Paul",
        last_name: "Allen",
        email: "PAllen@fb.com",
        job_title: "VP",
        salary_in_usd: 165000,
        address: {
            street: "345 Twin St",
            city: "Sacramento",
            state: "CA",
            zip: 90013
        }
    },
    {
        company_id: apple[0]._id, 
        first_name: "Tim",
        last_name: "Cook",
        email: "TCook@ap.com",
        job_title: "CEO",
        salary_in_usd: 250000,
        address: {
            street: "789 Peach St",
            city: "Seattle",
            state: "WA",
            zip: 92500
        }
    },
    {
        company_id: apple[0]._id, 
        first_name: "Bill",
        last_name: "Smith",
        email: "BSmith@ap.com",
        job_title: "Janitor",
        salary_in_usd: 1250000,
        address: {
            street: "789 Orange St",
            city: "Seattle",
            state: "WA",
            zip: 92500
        }
    },
    {
        company_id: apple[0]._id, 
        first_name: "Sally",
        last_name: "Johnson",
        email: "SJohn@ap.com",
        job_title: "Architect",
        salary_in_usd: 750000,
        address: {
            street: "789 Plum St",
            city: "Seattle",
            state: "WA",
            zip: 92500
        }
    }
    ]
  
    await Employee.insertMany(employees)
    console.log('Created employees with companies!')
  }
  
  const run = async () => {
    await main()
    //closes database
    db.close()
  }
  
  run()