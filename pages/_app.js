import "../styles/globals.css";
import '../components/index.css'
import 'bulma/css/bulma.min.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
