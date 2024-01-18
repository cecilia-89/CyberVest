import mongoose from "mongoose";

const riskSchema = new mongoose.Schema({
    'Tolerance': Number,
    'Nigerian stocks': Number,
    'Foreign stocks': Number,
    'Tech stocks': Number,
    'Emerging bonds': Number,
    'Nigerian bonds': Number,
    'Foreign bonds': Number,
    'Commodoties': Number,
    'Real estate': Number, 
    'T-bills': Number,
    'Alternates': Number,
})

const risks = mongoose.model('risks', riskSchema);

export default risks;
