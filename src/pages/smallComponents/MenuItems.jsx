import React, { useEffect, useRef, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, path, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      ref={ref}
      className="menu-items"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 && <HiOutlineChevronRight />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={path}>
          <span>{items.title}</span>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;
