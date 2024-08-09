import * as styles from "../ui/NavBar.module.scss";
export const customHookNav = (pathname:string) => {
  const counterLinkStyle = pathname === "/counter" ? styles.active_link : "";
  const homeLinkStyle = pathname === "/" ? styles.active_link : "";
  return { counterLinkStyle, homeLinkStyle };
};
