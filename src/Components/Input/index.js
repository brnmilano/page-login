import "./styles.css";

function Input({
  type,
  backgroundColor,
  padding,
  borderRadius,
  label,
  name,
  placeholder,
  fontSize,
  width,
}) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={name}
        style={{ backgroundColor, padding, borderRadius, fontSize, width }}
      />
    </div>
  );
}

export default Input;
