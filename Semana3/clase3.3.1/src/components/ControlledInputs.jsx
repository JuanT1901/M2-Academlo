import { useState } from "react";

const ControlledInputs = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setText1(e.target.text1.value);
  };

  const handleChangeInput = (e) => {
    setText2(e.target.value);
  };

  return (
    <div>
      <h2>Input no controlado</h2>
      <form onSubmit={handleSubmit}>
        <input name="text1" type="text" />
        <button type="submit">Mostrar texto</button>
        <button type="reset">Reset</button>
      </form>
      <p>{text1}</p>
      <hr />
      <h2>Input controlado</h2>
      <input value={text2} onChange={handleChangeInput} type="text" />
      <p>{text2}</p>
      <div>
        {text2.length > 8 && (
          <span className="warning">
            El campo sólo debe contener 8 caracteres
          </span>
        )}
      </div>

      <div>
        {!text2.includes("@") && (
          <span className="warning">El campo debe tener el caracter @</span>
        )}
      </div>
    </div>
  );
};
export default ControlledInputs;
