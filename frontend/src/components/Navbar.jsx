import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <div className="navbar bg-blue-700 mt-5 mb-5 shadow-2xl">
        <div className="flex-1">
          <Link  to={"/"}
          className="btn btn-ghost text-xl text-black">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/add/prediction"}>
              <a className="text-xl text-black">Prediction</a>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navigation;
