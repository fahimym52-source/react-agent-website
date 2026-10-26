import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function () {
  return (
    <div>
      <div>{/* <Navbar /> */}</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
