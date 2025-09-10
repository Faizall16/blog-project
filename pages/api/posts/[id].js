import data from "../../../lib/dataStore";

export default function Handler(req, res) {
  const { id } = req.query;
  const { Posts } = data;

  if (!id) {
    return res.status(400).json({ error: "Post ID is required" });
  }

  // Find the post in the same data that the list API uses
  const Postingan = Posts.find((value) => value.id == id);

  if (!Postingan) {
    return res.status(404).json({ error: "Post not found" });
  }

  return res.status(200).json(Postingan);
}
