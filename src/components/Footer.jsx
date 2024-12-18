import React from "react";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>Copywrite © {year}</p>
    </footer>
  );
}

export default Footer;
