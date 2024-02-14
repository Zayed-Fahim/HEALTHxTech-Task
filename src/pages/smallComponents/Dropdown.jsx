import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  const dropdownStyle = depthLevel > 1 ? { left: "100%", top: "0%" } : {};

  return (
    <ul
      className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}
      style={dropdownStyle}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
