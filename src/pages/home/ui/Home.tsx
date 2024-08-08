import { changeColorTheme } from "#src/features/theme/themeSlice";

import { useDispatch } from "react-redux";

type TypeHomeProps = {
  setActualTheme: (value: string) => void;
  actualTheme: string;
};
const Home = () => {
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch(changeColorTheme());
  };
  return (
    <div>
      <button onClick={handleToggleTheme}>theme-change</button>
    </div>
  );
};

export default Home;
