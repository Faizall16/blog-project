import data from "../data"


export default function Handler(req, res) {
    const { id } = req.query;
    const { Posts } = data;
    if(id){
        const Postingan = Posts.find(value => value.id == id)
        return res.status(200).json(Postingan)
    }

    return res.status(404).json({error: "Tidak ada postingan"})
}