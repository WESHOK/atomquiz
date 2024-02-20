'use client'

import Header from 'root/components/header'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
      weight: '500',
      subsets: ['cyrillic'],
})

export default function RootLayout({ children }) {
 return (
    <html className={roboto.className}>
      <body style={{margin: '0px'}}>
        <Header/>
        <div style={{paddingTop: '120px'}}>{children}</div>
      </body>
    </html>
  )
}
