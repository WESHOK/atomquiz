'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Social(props)
{
    return <motion.a
        href={props.link}
        whileTap={{scale: 0.8}}
        style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#0126ff',
            borderRadius: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
    }}>
        <Image
            src={props.img}
            width={28}
            height={28}
            alt='social'
        />
    </motion.a>
}