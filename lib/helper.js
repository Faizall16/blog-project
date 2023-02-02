import { validateHeaderValue } from "http";

const baseURL = "https://synapsis-project-q37n.vercel.app/api/posts"

export default async function getPost(id) {
    const res = await fetch(`${baseURL}`)
    const Posts = await res.json()

    if(id) {
        return Posts.find(value => value.id == id)
    }

    return Posts;
}