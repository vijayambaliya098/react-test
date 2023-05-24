import { NavLink } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar-wrapper">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/applications"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                <span>Applications</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
              >
                <span>Resources</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
