import data from "./data"

// api/user
export default function User(req, res) {
    const { Users } = data;
    if(Users) return res.status(200).json(Users)
    return res.status(404).json({error:"Data is Empty"})
}