import "./Topbar.css";
import bhopal from "../../assets/bhopal.png";
import edeman from "../../assets/edeman.svg";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topBar">
      <div className="container">
        <div className="vit">
          <img className="image" src={bhopal} alt="bhopal" />
        </div>
        <Link to="" style={{ textDecoration: "none" }}>
          <span>GETRECIPE</span>
        </Link>
        <img className="image" src={edeman} alt="edaman" />
      </div>
    </div>
  );
}
