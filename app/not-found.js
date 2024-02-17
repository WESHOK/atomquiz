'use client'

import logo from 'root/public/404.webp'
import Image from 'next/image'

export default function NotFound()
{
      return (
            <div style={{
                  paddingTop: '50px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
            }}>
                  <Image
                  src={logo}
                  width={512}
                  height={512}
                  alt='404'/>
                  <h1>УПС!</h1>
                  <h2>мы не смогли найти страницу по указанному адресу</h2>
            </div>
      )
}