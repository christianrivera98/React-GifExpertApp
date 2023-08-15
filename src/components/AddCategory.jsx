import React, { useState } from "react";

export function AddCategory({ onNewCategory }) {
  const [inputValue, setinputValue] = useState("");

  const onInputChage = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setinputValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChage}
        />
      </form>
    </>
  );
}

export default AddCategory;
