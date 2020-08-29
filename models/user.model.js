const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    birthday: { type: String, required: true },
    document: { type: String, required: true },
    hash: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordResetToken: { type: String, required: false },
    passwordResetExpires: { type: Date, required: false },
    image: { type: String, default:null },
    role: { type: Number, required: true },
    status: { type: Number, required: true },
    isVerified: { type: Boolean, default: false },
    isVerifiedEmail: { type: Boolean, default: false },
    isVerifiedDoc: { type: Boolean, default: false },
    isVerifiedPhone: { type: Boolean, default: false },
    // secureIps: { type: [String], default:null },
    secureIps: { type: String, default:null },
    localCoin: { type: Number, default: 1 },
    language: { type: Number, default: 1 },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date }
});

//Agregar virutal id, y quitar _id y contraseña de los responses
schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);