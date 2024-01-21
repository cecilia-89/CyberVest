import mongoose from "mongoose";

const riskSchema = new mongoose.Schema({
    tolerance: {
        value: { type: Number},
        stocks: [ 
          {
            name: { type: String },
            percentage: { type: Number },
          },
        ],
    },
})

const risks = mongoose.model('risks', riskSchema);

export default risks;
