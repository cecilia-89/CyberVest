import risks from "./model.js";

const getRisk = async (req, res) => {
    const data = req.params.tolerance
    const query = await risks.findOne({'tolerance.value': 3})
    res.status(200).send(query? query.tolerance: null)
}

export default getRisk