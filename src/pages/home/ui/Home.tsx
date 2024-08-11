import ChangeLang from "#src/widgets/changeLang/ChangeLang";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div className="container">
      <ChangeLang />
      <div>{t("homeDnepr")}</div>
    </div>
  );
};

export default Home;
