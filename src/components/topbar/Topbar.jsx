import "./Topbar.css";
import bhopal from "../../assets/bhopal.png";
import edeman from "../../assets/edeman.svg";

export default function Topbar() {
  return (
    <div className="topBar">
      <div className="container">
        <div className="vit">
          <img className="image" src={bhopal} alt="bhopal" />
        </div>
        <span>GETRECIPE</span>
        <img className="image" src={edeman} alt="edaman" />
      </div>
    </div>
  );
}
