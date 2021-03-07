import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../Input";
import Style from "./styles";

function FullNameForm() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const history = useHistory();

  const handleChnageName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChnageLastName = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    history.push("/todo");
  };

  const inputList = [
    {
      id: 1,
      value: name,
      onChange: handleChnageName,
      placeholder: "Name",
    },
    {
      id: 2,
      value: lastname,
      onChange: handleChnageLastName,
      placeholder: "Lastname",
    },
  ].map(({ id, value, onChange, placeholder }) => {
    return (
      <div key={id} className="mb-3">
        <Input value={value} onChange={onChange} placeholder={placeholder} />
      </div>
    );
  });

  return (
    <Style className="container">
      <div className="row">
        <div className="col-sm-8 offset-sm-2">
          <form onSubmit={handleSubmit}>
            {inputList}
            <button type="submit" className="btn btn-danger w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Style>
  );
}

export default FullNameForm;
