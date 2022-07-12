import { useState } from "react";

const initFormData = {
  name: "",
  email: "",
  country: "USA",
  status: true
};

export default function Form() {
  const [formData, setFormData] = useState(initFormData);

  // function handleNameChange(e){
  //   setFormData({...formData, name:e.target.value})
  // }

  // function handleEmailChange(e){
  //   setFormData({...formData, email:e.target.value})
  // }

  function handleChange(e) {
    const { value, name, type, checked } = e.target;

    const updatedValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: updatedValue });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <form>
      <div>
        <input
          name="name"
          onChange={handleChange}
          placeholder="name"
          type="text"
          value={formData.name}
        />
      </div>
      <div>
        <input
          name="email"
          onChange={handleChange}
          placeholder="email"
          type="email"
          value={formData.email}
        />
      </div>

      <div>
        <select
          name="country"
          onChange={handleChange}
          defaultValue={formData.country}
          placeholder="country"
          value={formData.country}
        >
          <option key="India">India</option>
          <option key="USA">USA</option>
        </select>
      </div>

      <div>
        <input
          name="status"
          onChange={handleChange}
          checked={formData.status}
          type="checkbox"
        />
        <label> Currently Working</label>
      </div>

      <div>
        <input onChange={handleSubmit} type="submit" />
      </div>
      <ul>
        <li> Name:{formData.name}</li>
        <li> Email:{formData.email}</li>
        <li> Email:{formData.country}</li>
      </ul>
    </form>
  );
}
