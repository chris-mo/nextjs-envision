import "../styles/globals.module.css";
import "../components/Button/Button.module.scss";
import "../components/Footer/Footer.module.scss";
import "../components/LongCard/LongCard.module.scss";
import "../components/LongCard2/LongCard2.module.scss";
import "../components/Navbar/Navbar.module.scss";
import "../components/PageHero/PageHero.module.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
