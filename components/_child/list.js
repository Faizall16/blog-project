export default function List({ data, handleEdit, handleDelete }) {
  return (
    <ul className="max-w-md divide-y divide-gray-200">
      {data.map((contact) => {
        return (
          <li className="pb-3 sm:pb-4" key={contact.id}>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {contact.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {contact.email}
                </p>
              </div>
              <div className="inline-flex gap-2 items-center text-base font-semibold text-gray-900">
                <button type="button" onClick={() => handleEdit(contact.id)}>
                  Edit
                </button>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
