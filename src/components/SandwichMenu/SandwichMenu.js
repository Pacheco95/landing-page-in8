import React from "react";
import { Link } from "react-scroll";
import SandwichMenuStyle from "./SandwichMenuStyle";

const SandwichMenu = () => {
  const [checked, setChecked] = React.useState(false);

  const uncheck = (elName) => setChecked(false);

  function handleSetActive(to) {
    uncheck();
  }

  return (
    <SandwichMenuStyle color="red">
      <nav role="navigation">
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link
              activeClass="active"
              to="tableEl"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onSetActive={handleSetActive}
            >
              <li>Lista</li>
            </Link>

            <Link
              activeClass="active"
              to="footerEl"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onSetActive={handleSetActive}
            >
              <li>Sobre mim</li>
            </Link>

            <Link
              activeClass="active"
              to="formEl"
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              onSetActive={handleSetActive}
            >
              <li>Cadastro</li>
            </Link>
          </ul>
        </div>
      </nav>
    </SandwichMenuStyle>
  );
};

export default SandwichMenu;
