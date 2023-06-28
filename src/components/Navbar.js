import { Button } from "react-bootstrap";
import { TOKEN } from "../utils/constants";
import isLoggedIn from "../utils/helper";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const token = localStorage.getItem(TOKEN);
  const isLogin = isLoggedIn();
  const navigate=useNavigate()
  const onAuthButtonClick = () => {
    if (isLogin) {
      localStorage.clear()
        }
    navigate("/login")
  };
  return (
    <div
      className="  container-fluid sticky-top bg-black "
      style={{ overflow: "hidden" }}
    >
      <div className="row text-danger p-3 ">
        <div className="col-4" style={{ fontWeight: "600", fontSize: "25px" }}>
          MBA
        </div>
        <div className="col-6">
          <input
            size="lg"
            type="text"
            className="form-control"
            placeholder="Search Movie"
          />
        </div>
        <div className="col-1">
          <Button className="btn btn-danger text-white" onClick={onAuthButtonClick}>
            {(token) ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}
