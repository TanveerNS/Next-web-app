const mongoose = require('mongoose')
const { Schema } = mongoose

const reactSchema = new Schema({
    title: {
        type: String,
        trim: true,
        
    },
    picture: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
        
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
    },
    {timestamps: true}
);

export default mongoose.model('React', reactSchema);