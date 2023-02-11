//Here is the model for the trip. It has a start date, end date, duration, start station, end station, rider, and bike. The rider and bike are both references to the user and bike models.



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    start_date:{
        type: Date
    },
    end_date: {
        type: Date
    },
    duration: {
        type: Number
    },
    start_station: {
        type: String
    },
    end_station: {
        type: String
    },
    rider: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bike: {
        type: Schema.Types.ObjectId,
        ref: 'Bike'
    }
})

module.exports = mongoose.model('Trip', tripSchema);