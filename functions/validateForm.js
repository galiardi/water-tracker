export default function validateForm(fields, errors) {
  const zeroErrors = Object.values(errors).every((value) => !value);
  if (!zeroErrors) return false;

  const completedForm = Object.values(fields).every((value) => !!value);
  if (!completedForm) return false;
  return true;
}
