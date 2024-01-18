const mongoose = require('mongoose');

const pizzaSchema = mongoose.schema({

    name: {type: String, require},
    varients: [],
    prices: [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require}

}, {
    timestamps:true,
})