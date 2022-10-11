import React, { useState } from "react";
import { useData } from "../context/data";
import firebase from "../firebase/client";

export const Form = () => {
  const { currentPeriod, dateAllowedToSubmit } = useData();

  const [form, setForm] = useState({
    Andrea: "",
    Pablo: "",
    Rodrigo: "",
    cargoFijo: "",
    valorUnitarioM3: "",
    sobreconsumoValorUnitario: "",
    sobreconsumoVolumen: "",
  });

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };

  const submit = (e) => {
    e.preventDefault();
    // const db = firebase.firestore()
    // db.collection('lecturas')
    //   .add({ ...form, date: Date.now() })
    //   .then(() => {
    //     setForm({
    //       Andrea: '',
    //       Pablo: '',
    //       Rodrigo: '',
    //       cargoFijo: '',
    //       valorUnitarioM3: '',
    //       sobreconsumoValorUnitario: '',
    //       sobreconsumoVolumen: '',
    //     })
    //   })
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
            value={form.Andrea}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Pablo</p>
          <input
            name="Pablo"
            value={form.Pablo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Rodrigo</p>
          <input
            name="Rodrigo"
            value={form.Rodrigo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <h2>Datos de la boleta:</h2>
          <p>Cargo fijo</p>
          <input
            name="cargoFijo"
            value={form.cargoFijo}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Valor unitario del m3</p>
          <input
            name="valorUnitarioM3"
            value={form.valorUnitarioM3}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Sobreconsumo (valor unitario)</p>
          <input
            name="sobreconsumoValorUnitario"
            value={form.sobreconsumoValorUnitario}
            type="number"
            onChange={(e) => handleChange(e)}
          />
          <p>Sobreconsumo (m3)</p>
          <input
            name="sobreconsumoVolumen"
            value={form.sobreconsumoVolumen}
            type="number"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button
          type="submit"
          onClick={(e) => submit(e)}
          disabled={!dateAllowedToSubmit}
        >
          Enviar
        </button>
        {!dateAllowedToSubmit && (
          <p>
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
        `}
      </style>
    </>
  );
};
