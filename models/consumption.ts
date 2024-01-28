import { Schema, model, models } from "mongoose";

const ConsumptionSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: String,
        required: [true, 'Date is required!'],
        unique: [true, 'Date is already exist!'],
    },
    consump: {
        type: Number,
        required: [true, 'Consumption is required!'],
        unique: [true, 'Consumption is has to be different!']
    }
})

const Consumption = models.Consumption || model('Consumption', ConsumptionSchema)

export default Consumption