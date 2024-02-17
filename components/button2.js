'use client'

import { motion } from 'framer-motion'

import 'root/globals.css';

export default function Button2(props)
{
    return <motion.a
        href={props.link}
        className='button2'
        whileHover={{color: 'blue'}}
        whileTap={{scale: 0.8}}>
            {props.name}
    </motion.a>
}