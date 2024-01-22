import risks from "./model.js";

const getRisk = async (req, res) => {
    console.log(req)
    const data = req.params.tolerance
    const query = await risks.findOne({'tolerance.value': data})
    res.status(200).send(query? query.tolerance: null)
}

export default getRisk