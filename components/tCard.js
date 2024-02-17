import Image from 'next/image'

export default function Tcard(props)
{
    return <div style={{
        width: '360px',
        height: '320.8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
    }}>
        <Image
            src={props.img}
            width={140}
            height={140}
            alt='Tcard'
            style={{marginBottom: '25px'}}
        />
        <div style={{fontSize: '30px', marginTop: '12px', marginBottom: '25px'}}>{props.title}</div>
        <div style={{fontSize: '18px'}}>{props.text}</div>
    </div>
}