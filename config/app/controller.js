import risks from "./model.js";


const getRisk = async (req, res) => {
    const query = risks.find({Tolerance: 3})
    return query
}

export default getRisk