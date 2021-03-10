import React from "react";

function Header(props) {
  return (
    <div>
      <img
        src="https://www.eurotechconseil.com/wp-content/uploads/2020/06/undraw_code_thinking_1jeh-e1592561562846.png"
        alt="headerImg"
        className={`header ${
          props.expanded ? "header-expanded" : "header-contract"
        }`}
      />
      <h1
        className={`header-text ${
          props.expanded ? "header-text-expanded" : "header-text-contract"
        }`}
      >
        Name it
      </h1>
    </div>
  );
}

export default Header;
