import React from "react";

export const Footer = ({ addOrRemoveFevourite }) => {
  const validation = localStorage.getItem("token");
  console.log(validation);

  return (
    <>
      <div className={validation ? "footer_no_bottom" : "footer"}>
        <nav>
          <ul>
            <li>
              <a href="http://gooogle.com" rel="noopener noreferrer">
                {" "}
                Google
              </a>
            </li>
          </ul>
        </nav>
        <p>Copyright Alkemy Challenge</p>
      </div>
    </>
  );
};
