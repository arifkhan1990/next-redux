import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from '../components/NavbarSection';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarSection />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
