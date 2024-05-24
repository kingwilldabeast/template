const { Schema } = require('mongoose')

const Publisher = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        url: {type: String, required: true}
    },
    {timestamps: true}

)

//exporting this thing called a Publisher and all of its information so other files can use it
module.exports = Publisher
