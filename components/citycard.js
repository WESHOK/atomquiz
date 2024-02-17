import Link from 'next/link'

import 'root/globals.css'

export default function CityCard(props)
{
      return <div className='card'>
                  <Link href={ `/quiz/${props.name}` }><h1>{props.name}</h1></Link>
                  <p>{props.info}</p>
            </div>
}