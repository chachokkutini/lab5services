import bankSchema from "../schemas/bankSchema.js"
import clientSchema from "../schemas/clientSchema.js";
import currencySchema from "../schemas/currencySchema.js";

export const getAllBanks = async (req, res) => {
    try {
        const bank = await bankSchema.find();
        res.json(bank);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't get Banks!",
        });
    }
}

export const getAllClients = async (req, res) => {
    try {
        const client = await clientSchema.find();
        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't get Clients!",
        });
    }
}

export const getAllCurrencies = async (req, res) => {
    try {
        const currency = await currencySchema.find();
        res.json(currency);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't get currencies!",
        });
    }
}

export const createExchange = async (req, res) => {
    try {
        const exchanging = await bankSchema({
            bankId: req.body.bankId,
            assignedClient: req.body.clientId,
            assignedCurrency: req.body.currencyId
        })
        try {
            let currencyId = req.body.currencyId
            const currency = await currencySchema.updateOne({ currencyId: currencyId, }, {
                assignedBank: req.body.bankId,
            })
        }
        catch (error) {
            console.log(error);
        res.status(500).json({
            message: "Can't Update"
        })
        }
        try {
            let clientId = req.body.clientId
            const client = await clientSchema.updateOne({ clientId: clientId, }, {
                assignedBank: req.body.bankId,
            })
        }
        catch (error) {
            console.log(error);
        res.status(500).json({
            message: "Can't Update"
        })
        }
        res.status(200).json({
            "message" : "success"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Can't Create"
        })
    }
}