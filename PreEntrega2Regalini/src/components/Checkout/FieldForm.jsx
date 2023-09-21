import React from 'react';

const FieldForm = ({ label, name, onChange, onKeyDown }) => {
  return (
    <div className="">
      <label className="">{label}</label>
      <input name={name} type="text" onChange={onChange} onKeyDown={onKeyDown} />
    </div>
  );
};

export default FieldForm;