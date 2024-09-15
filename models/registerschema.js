const mongoose= require("mongoose")

const registerSchema= new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    company: String,
    message: String
});

module.exports= mongoose.model('Reg', registerSchema);