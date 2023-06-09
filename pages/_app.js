import React from 'react';
import GlobalStyles from '../styles/global';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;
