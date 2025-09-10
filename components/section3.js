import List from "./_child/list";
import { useState } from "react";
import { uid } from "uid";

export default function Section3() {
  const [contact, setContacts] = useState([
    {
      id: 1,
      name: "Bandhu Asan",
      email: "bandhu_asan@stanton.com",
    },
    {
      id: 2,
      name: "Anjushri Gowda",
      email: "gowda_anjushri@wiza.com",
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Data Added!!!");
    let data = [...contact];

    if (formData.name === "") {
      return false;
    }
    if (formData.email === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.email = formData.email;
        }
      });
    } else {
      data.push({ id: uid(), name: formData.name, email: formData.email });
    }

    setIsUpdate({ id: null, status: "false" });
    setContacts(data);
    setFormData({ name: "", email: "" });
  }

  function handleEdit(id) {
    let data = [...contact];
    let foundData = data.find((contact) => contact.id === id);
    setFormData({ name: foundData.name, email: foundData.email });
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    let data = [...contact];
    let filteredData = data.filter((contact) => contact.id !== id);
    setContacts(filteredData);
  }

  return (
    <div className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-2xl pb-12 text-center">Users List</h1>
      <form className="grid md:grid-cols-2">
        <div className="form-group">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Name
            </label>
            <input
              type="text"
              className="input-data"
              value={formData.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              type="text"
              className="input-data"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-24 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
        <List
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          data={contact}
        />
      </form>
    </div>
  );
}
