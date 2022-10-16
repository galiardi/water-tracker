import React, { useState } from "react";
import { useData } from "../context/data";
import { validateForm } from "../functions";

export default function Form() {
  const { currentPeriod, dateAllowedToSubmit } = useData();

  const [fields, setFields] = useState({
    Andrea: "",
    Pablo: "",
    Rodrigo: "",
    cargoFijo: "",
    valorUnitarioM3: "",
    sobreconsumoValorUnitario: "0",
    sobreconsumoVolumen: "0",
  });

  const [errors, setErrors] = useState({
    Andrea: "",
    Pablo: "",
    Rodrigo: "",
    cargoFijo: "",
    valorUnitarioM3: "",
    sobreconsumoValorUnitario: "",
    sobreconsumoVolumen: "",
  });
  const [disabled, setDisabled] = useState(false); // change initial state to !dateAllowedToSubmit

  const handleChange = (e) => {
    const newFields = { ...fields, [e.target.name]: e.target.value };
    setFields(newFields);
  };

  const submit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (!validateForm(fields, errors)) {
      setDisabled(false);
      return;
    }
    const response = await fetch("./api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });
    if (response.status === 200) {
      setFields({
        Andrea: "",
        Pablo: "",
        Rodrigo: "",
        cargoFijo: "",
        valorUnitarioM3: "",
        sobreconsumoValorUnitario: "",
        sobreconsumoVolumen: "",
      });
    } else {
      setDisabled(false);
    }
  };

  return (
    <>
      <form>
        <div>
          <h1>Ingresar datos {currentPeriod.monthName}</h1>
          <h2>Lecturas:</h2>
          <p>Andrea</p>
          <input
            name="Andrea"
            value={fields.Andrea}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Pablo</p>
          <input
            name="Pablo"
            value={fields.Pablo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Rodrigo</p>
          <input
            name="Rodrigo"
            value={fields.Rodrigo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <h2>Datos de la boleta:</h2>
          <p>Cargo fijo</p>
          <input
            name="cargoFijo"
            value={fields.cargoFijo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Valor unitario del m3</p>
          <input
            name="valorUnitarioM3"
            value={fields.valorUnitarioM3}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Sobreconsumo (valor unitario)</p>
          <input
            name="sobreconsumoValorUnitario"
            value={fields.sobreconsumoValorUnitario}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Sobreconsumo (m3)</p>
          <input
            name="sobreconsumoVolumen"
            value={fields.sobreconsumoVolumen}
            type="number"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" onClick={(e) => submit(e)} disabled={disabled}>
          Enviar
        </button>
        {!dateAllowedToSubmit && (
          <p id="alert">
            Puedes registrar este periodo desde el 1 de{" "}
            {currentPeriod.nextMonthName}.
          </p>
        )}
      </form>
      <style jsx>
        {`
          form {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
          }
          h1 {
            font-weight: 800;
            font-size: 1.1rem;
            text-align: center;
            margin-bottom: 0.5rem;
          }
          form input {
            border: 1px solid rgb(197, 197, 197);
            border-radius: 0.25rem;
            margin-bottom: 1rem;
            width: 10rem;
          }
          button {
            background-color: rgb(126, 126, 247);
            padding: 0.5rem 2rem;
            margin: 1rem;
            color: white;
            width: fit-content;
            border-radius: 0.6rem;
          }
          button:disabled {
            background-color: rgb(220, 220, 220);
          }
          #alert {
            font-size: 0.9rem;
            color: rgb(180, 100, 100);
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
