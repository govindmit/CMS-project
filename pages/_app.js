
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/globals.css'

import Sidebar from './Sidebar';

function MyApp({ Component, pageProps }) {
  const [loginuser, setLoginUser] = useState()
  const [value, setValue] = useState('')

  useEffect(() => {

    setLoginUser(JSON.parse(localStorage.getItem('loginUser')));
  }, [])
  return (
    <React.StrictMode>
    <div>
      {loginuser ?
        <Sidebar>
         <Component {...pageProps} />
        </Sidebar>
        :  <Component {...pageProps} />
      }

    </div>
    </React.StrictMode>
  )
}

export default MyApp;
