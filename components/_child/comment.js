export default function Comment({ name, body }) {
    if(!name && !body) return <></>
    return (
        <section className='container mx-auto md:px-2 py-4 w-1/2'>
            <div className="text-lg font-bold">Comment</div>
            {/* <input type="text" className="input-comment" placeholder="Add Comment"></input> */}
            <div className="item my-5">
            <div className="text-sm font-bold">{name || "No Name"}</div>
            <div className="text-sm">{body}</div>
        </div>
        </section>
    )
}

// function Item() {
//     return (
//         <div className="item my-5">
//             <div className="text-sm font-bold">Deeptimoyee Bharadwaj</div>
//             <div className="text-sm">Omnis eaque voluptatum. Rerum perferendis ut. Ut aut reiciendis. Aut commodi quia.</div>
//         </div>
//     )
// }