import data from "../../../lib/dataStore";

// api/posts
export default function Post(req, res) {
  const { Posts, Users } = data;

  if (req.method === "GET") {
    if (Posts) return res.status(200).json(Posts);
    return res.status(404).json({ error: "Data is Empty" });
  }

  if (req.method === "POST") {
    try {
      const { title, author, summary, category, content } = req.body || {};

      if (!title || !author || !content) {
        return res
          .status(400)
          .json({ error: "title, author, content are required" });
      }

      const newId = (Posts?.[Posts.length - 1]?.id || 0) + 1;
      const selectedUser = Users?.[0] || {};

      const newPost = {
        id: newId,
        user_id: selectedUser.id || 0,
        name: author,
        email: selectedUser.email || "",
        image_publisher:
          selectedUser.image_publisher || "/images/Minimalist Avatar.jpg",
        title,
        body: content,
        published: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
        summary: summary || "",
        image: "/images/Polaroid Landscape.jpg",
        comments: {
          name: "Keerti Adiga",
          body: "Beatae occaecati culpa. Sint illum earum. Quo quia est. Qui quae ratione.",
        },
        category: category || "",
      };

      Posts.push(newPost);
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: "Failed to create post" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
