import LeftImage from "../../Components/LeftImage";
import RightLogin from "../../Components/RightLogin";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <LeftImage />
      </div>

      <div className="content">
        <RightLogin />
      </div>
    </div>
  );
}

export default Home;
