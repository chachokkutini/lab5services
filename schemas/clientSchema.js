import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    clientId: { type: String, require: true },
    clientName: { type: String, require: true },
    assignedBank: { type: String, require: true }
},
{
    timestamps: true,
});

export default mongoose.model('Client', clientSchema);