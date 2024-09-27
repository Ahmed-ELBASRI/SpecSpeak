import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { TfiAngleDown, TfiMenu } from "react-icons/tfi";
import logo from "../../../assets/img/pec.png";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const menuList = [
  {
    id: 1,
    path: "/",
    name: "Home",
  },
  {
    id: 2,
    path: "#",
    name: "Platform",
    subMenu: [
      {
        id: 1,
        path: "/about",
        name: "About Us",
      },
      {
        id: 3,
        path: "/team",
        name: "Our Team",
      },
      {
        id: 4,
        path: "/api-documentation",
        name: "API Documentation",
      },
    ],
  },
  {
    id: 4,
    path: "/contact",
    name: "Contact",
  },
];

const Header = () => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    selectId: null,
    active: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);
  const isSticky = () => {
    const header = document.getElementById("navigation");
    const scrollTop = window.scrollY;

    scrollTop >= 35
      ? header.classList.add("navbar-fixed")
      : header.classList.remove("navbar-fixed");
  };
  // const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    // navigate("/login"); 
  };
  return (
    <header
      id="navigation"
      className="fixed-top navbar-light bg-faded site-navigation"
    >
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className=" ">
            <div className="header_right ">
              <nav id="main-menu" className="ms-auto">
                <ul>
                  {menuList.map(({ id, name, path, subMenu }) => {
                    return (
                      <li key={id}>
                        {subMenu?.length ? (
                          <Link className="nav-link special" to={path}>
                            {name}{" "}
                            <span>
                              <TfiAngleDown />
                            </span>
                          </Link>
                        ) : (
                          <Link className="nav-link" to={path}>
                            {name}{" "}
                          </Link>
                        )}
                        {/* <Link className="nav-link" to={path}>
                          {name}{" "}
                          {subMenu?.length && (
                            <span>
                              <TfiAngleDown />
                            </span>
                          )}
                        </Link> */}
                        {subMenu?.length && (
                          <ul>
                            {subMenu.map(({ name, path, id }) => {
                              return (
                                <li key={id}>
                                  <Link className="nav-link" to={path}>
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav
                className={`mobile_menu ${
                  isMenuOpen ? "mobile_menu_active" : ""
                }`}
              >
                <ul>
                  {menuList.map(({ id, name, path, subMenu }) => {
                    return (
                      <li
                        key={id}
                        onClick={() =>
                          setIsDropdownOpen({
                            active: !isDropdownOpen.active,
                            selectId: id,
                          })
                        }
                      >
                        <Link className="nav-link" to={path}>
                          {name}{" "}
                          {subMenu?.length && (
                            <span>
                              <TfiAngleDown />
                            </span>
                          )}
                        </Link>
                        {subMenu?.length && (
                          <ul
                            className={` ${
                              isDropdownOpen.active === true &&
                              isDropdownOpen.selectId === id
                                ? "dropdownActive"
                                : "dropdown"
                            }`}
                          >
                            {subMenu.map(({ name, path, id }) => {
                              return (
                                <li key={id}>
                                  <Link className="nav-link" to={path}>
                                    {name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div className=" d-flex d-lg-block align-items-center">
            <div className="call_to_action">
              {currentUser ? (
                <>
                  
                  <span>Hey {currentUser}</span>
                  {/* <button onClick={handleLogout}>Log out</button> */}
                  <Link onClick={handleLogout} to={"/login"}>Log out</Link>
                </>
              ) : (
                <Link to={"/login"}>Log in</Link>
              )}
            </div>
            <div
              className="d-lg-none d-block menu_icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <TfiMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
