import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
    currencyId: { type: String, require: true },
    currencyName: { type: String, require: true },
    exchangeRate: { type: String, require: true },
    assignedBank: { type: String, require: true }
},
{
    timestamps: true,
});

export default mongoose.model('Currency', currencySchema);