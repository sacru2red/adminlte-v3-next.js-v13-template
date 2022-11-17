// import '../styles/globals.css'
// import '../styles/globals.css'
// import 'admin-lte/dist/css/adminlte.min.css'
import type { AppProps } from 'next/app'
import React from 'react'
import adminLteStyle from 'admin-lte/dist/css/adminlte.min.css?type=global'
// import adminLte from 'admin-lte/dist/js/adminlte.min.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <style jsx global>{adminLteStyle}</style>
    </React.Fragment>
  )
}
