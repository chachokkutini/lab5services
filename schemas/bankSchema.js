import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
    bankId: { type: String, require: true },
    bankName: { type: String, require: true },
    exchangePrice: { type: String, require: true },
    assignedCurrency: { type: String, require: true },
    assignedClient: { type: String, require: true }
},
{
    timestamps: true,
});

export default mongoose.model('Bank', bankSchema);