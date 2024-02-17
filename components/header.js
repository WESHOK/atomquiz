'use client'

import Image from 'next/image'
import logo from 'root/public/logo.webp'

import 'root/globals.css'
import { motion } from "framer-motion";
import Button from './button1'


export default function Header()
{
    return <header style={{width: '1910px', position: 'fixed', backgroundColor: 'white'}}>
                <div className='header'>
                    <motion.a href='/#' whileTap={{scale: 0.8}}>
                    <Image
                    src={logo.src}
                    width={64}
                    height={64}
                    alt='logo'
                    style={{ marginLeft: '10px' }}
                    /></motion.a>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        width: '800px',
                    }}>
                        <Button name='О НАС' link='/#about-us'/>
                        <Button name='КВЕСТ' link='/quiz'/>
                        <Button name='КОНТАКТЫ' link='/#contacts'/>
                    </div>
                </div>
            </header>
}