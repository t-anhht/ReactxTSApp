import React, { useState } from "react";

interface Props {
  id: string;
  name: string;
  errorMessage: string;
  value: string | number | readonly string[] | undefined;
  onChange: () => void;
}

const Input = ({ id, name, errorMessage, value, onChange }: Props) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
