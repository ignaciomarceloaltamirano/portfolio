import '@fontsource/poppins';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Router from 'next/router';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import ThemeContextProdiver from '../context/ThemeContext';

const pageVariant = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    nProgress.start();
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', (url) => {
    nProgress.done();
    setLoading(false);
  });
  return (
    <ThemeContextProdiver>
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          key={router.router}
          initial="pageInitial"
          animate="pageAnimate"
          variants={pageVariant}
        >
          <Component {...pageProps} />
        </motion.div>
      )}
    </ThemeContextProdiver>
  );
}

export default MyApp;
