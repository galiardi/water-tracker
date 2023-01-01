import React, { useEffect, useState } from "react";
import { useData } from "../context/data";
import { validateForm } from "../functions";
import Field from "../components/Field";
import { getSession } from "next-auth/react";
import Modal from "../components/Modal";

export default function Form({ authorized }) {
  const [showModal, setShowModal] = useState(!authorized);
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

  const [disabled, setDisabled] = useState(true); // change initial state to !dateAllowedToSubmit

  useEffect(() => {
    setDisabled(!validateForm(fields, errors));
  }, [fields, errors]);

  const onFieldChange = (name, value, error) => {
    const newFields = { ...fields, [name]: value };
    const newErrors = { ...errors, [name]: error };
    setFields(newFields);
    setErrors(newErrors);
  };

  const submit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    if (!validateForm(fields, errors)) {
      setDisabled(false);
      return;
    }
    console.log(JSON.stringify({ fields }));
    const response = await fetch("./api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });
    try {
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        window.location.replace("https://leivas.vercel.app");
      } else {
        setDisabled(false);
      }
    } catch (error) {
      setDisabled(false);
      console.log(error);
    }
  };

  return (
    <>
      <form>
        <div>
          <h1>Ingresar datos {currentPeriod.monthName}</h1>
          <h2>Lecturas:</h2>
          <p>Andrea</p>
          <Field
            name="Andrea"
            value={fields.Andrea}
            type="number"
            onChange={onFieldChange}
            error={errors.Andrea}
            margin={105}
            lectura={true}
          />
          <p>Pablo</p>
          <Field
            name="Pablo"
            value={fields.Pablo}
            type="number"
            onChange={onFieldChange}
            error={errors.Pablo}
            margin={70}
            lectura={true}
          />
          <p>Rodrigo</p>
          <Field
            name="Rodrigo"
            value={fields.Rodrigo}
            type="number"
            onChange={onFieldChange}
            error={errors.Rodrigo}
            margin={35}
            lectura={true}
          />
          <h2>Datos de la boleta:</h2>
          <p>Cargo fijo</p>
          <Field
            name="cargoFijo"
            value={fields.cargoFijo}
            type="number"
            onChange={onFieldChange}
            error={errors.cargoFijo}
            margin={1000}
          />
          <p>Valor unitario del m3</p>
          <Field
            name="valorUnitarioM3"
            value={fields.valorUnitarioM3}
            type="number"
            onChange={onFieldChange}
            error={errors.valorUnitarioM3}
            margin={700}
          />
          <p>Sobreconsumo (valor unitario)</p>
          <Field
            name="sobreconsumoValorUnitario"
            value={fields.sobreconsumoValorUnitario}
            type="number"
            onChange={onFieldChange}
            error={errors.sobreconsumoValorUnitario}
            margin={3000}
          />
          <p>Sobreconsumo (m3)</p>
          <Field
            name="sobreconsumoVolumen"
            value={fields.sobreconsumoVolumen}
            type="number"
            onChange={onFieldChange}
            error={errors.sobreconsumoVolumen}
            margin={100}
          />
        </div>

        <button
          type="submit"
          onClick={(e) => submit(e)}
          disabled={disabled || !dateAllowedToSubmit}
        >
          Enviar
        </button>
        {!dateAllowedToSubmit && (
          <p id="alert">
            Puedes registrar este periodo desde el 1 de{" "}
            {currentPeriod.nextMonthName}.
          </p>
        )}
      </form>
      {showModal && <Modal onCancel={() => setShowModal(false)} />}
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

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const email = session.user.email;
  const authorizedUsers = JSON.parse(process.env.AUTHORIZED_USERS);
  const authorized = authorizedUsers.includes(email);
  return {
    props: { authorized },
  };
};
