import { useData } from "../context/data";

function Field({ name, value, type, onChange, margin, error, lectura }) {
  const { lastDocument } = useData();

  let validateField;
  if (lectura) {
    validateField = (inputValue, margin, fieldName) =>
      Number(inputValue) - Number(lastDocument[fieldName]) <= margin &&
      Number(inputValue) - Number(lastDocument[fieldName]) >= 0
        ? ""
        : "Valor fuera de rango.";
  } else {
    validateField = (inputValue, margin, fieldName) =>
      Math.abs(Number(inputValue) - Number(lastDocument[fieldName])) <= margin
        ? ""
        : "Valor fuera de rango.";
  }

  const onInputChange = (e) => {
    const newValue = e.target.value.trim();
    const newError = validateField(newValue, margin, name);
    onChange(name, newValue, newError);
  };

  return (
    <div>
      <input
        className="block w-full pl-4 border border-gray-300 rounded"
        value={value}
        onChange={onInputChange}
        type={type}
      />
      {error ? (
        <p className="text-red-700 text-base">{error}</p>
      ) : (
        <p className="text-transparent text-base">vacio</p>
      )}
    </div>
  );
}

export default Field;
