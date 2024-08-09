import React from "react";
import { Link } from "react-router-dom";
type LinkUiProps = {
  to: string;
  children: string;
  className?: string[] | string;
};
const LinkUi = ({ to, className, children }: LinkUiProps) => {
  let style = Array.isArray(className) ? className.join(" ") : className || "";
  return (
    <Link to={to} className={style}>
      {children}
    </Link>
  );
};

export default LinkUi;
