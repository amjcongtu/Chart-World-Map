import { useNavigate } from "react-router-dom";
import './index.css'

const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu">
        <div
        className="link"
          onClick={() => {
            navigate("/chart");
          }}
        >
          Chart
        </div>
        <div
        className="link"
          onClick={() => {
            navigate("/world-map");
          }}
        >
          WorldMap
        </div>
      </div>
    </>
  );
};
export default Menu;
