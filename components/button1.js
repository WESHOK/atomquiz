'use client'

import { motion } from 'framer-motion'

import 'root/globals.css';

export default function Button1(props)
{
    return <motion.a
        href={props.link}
        className='button1'
        whileTap={{scale: 0.8}}>
            {props.name}
    </motion.a>
}