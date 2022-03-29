import "./styles.css";

function Button({
  children,
  backgroundColor,
  borderRadius,
  padding,
  fontSize,
  fontWeight = "bold",
  display = "flex",
  justifyContent = "center",
  alignItems = "center",
  gap,
  width,
  onClick,
}) {
  return (
    <button
      className="button-container"
      style={{
        backgroundColor,
        borderRadius,
        padding,
        fontSize,
        fontWeight,
        display,
        justifyContent,
        alignItems,
        gap,
        width,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
