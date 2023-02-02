import { isJSDocReturnTag } from 'typescript';
import data from '../data'

// api/post
export default function Post(req, res) {
    const { Posts } = data;
    if(Posts) return res.status(200).json(Posts)
    return res.status(404).json({error:"Data is Empty"})
}