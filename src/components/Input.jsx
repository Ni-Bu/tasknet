import React from "react";

function Input({ placeholder, type = "text", value, Icon, setValue, name }) {
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="input-container">
      <Icon></Icon>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default Input;
