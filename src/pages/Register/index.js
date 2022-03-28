import "./styles.css";
import LeftImage from "../../Components/LeftImage";
import NewRegister from "../../Components/NewRegister";

function Register() {
  return (
    <div className="register-container" anchorId="register">
      <div className="content">
        <NewRegister />
      </div>

      <div className="content">
        <LeftImage />
      </div>
    </div>
  );
}

export default Register;
