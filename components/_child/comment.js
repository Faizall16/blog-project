export default function Comment({ name, body }) {
  if (!name && !body) return <></>;
  return (
    <section className="container mx-auto md:px-2 py-4 w-1/2">
      <div className="text-lg font-bold">Comment</div>
      <div className="item my-5">
        <div className="text-sm font-bold">{name || "No Name"}</div>
        <div className="text-sm">{body}</div>
      </div>
    </section>
  );
}
