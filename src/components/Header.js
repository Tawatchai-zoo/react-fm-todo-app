import React from "react";
// import desktopDark from "../images/bg-desktop-dark.jpg";
// import desktopLight from "../images/bg-desktop-light.jpg";
// import mobileDark from "../images/bg-mobile-dark.jpg";
// import mobileLight from "../images/bg-mobile-light.jpg";

// import iconCheck from "../images/icon-check.svg";
// import iconCross from "../images/icon-cross.svg";

// const bgImg = {
//     desktop: {
//         dark: desktopDark,
//         light: desktopLight,
//     },
//     mobile: {
//         dark: mobileDark,
//         light: mobileLight,
//     },
// };

const Header = ({ darkTheme, toggleTheme }) => {
    return (
        <div className="header">
            <h1>TODO</h1>
            <div className="toggle" onClick={toggleTheme}>
                {darkTheme ? <img src="../images/icon-sun.svg" alt="" /> : <img src="../images/icon-moon.svg" alt="" />}
            </div>
        </div>
    );
};

export default Header;
