import React from "react";
import SandwichMenuStyle from "./SandwichMenuStyle";

const SandwichMenu = () => {
  const [checked, setChecked] = React.useState(false);

  const uncheck = () =>
    setTimeout(() => {
      setChecked(false);
    }, 300);

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

          {/* prettier-ignore */}
          <ul id="menu">
          <a href="#" onClick={uncheck}><li>Lista</li></a>
          <a href="#" onClick={uncheck}><li>Sobre mim</li></a>
          <a href="#" onClick={uncheck}><li>Cadastro</li></a>
        </ul>
        </div>
      </nav>
    </SandwichMenuStyle>
  );
};

export default SandwichMenu;
