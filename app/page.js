import { Fragment } from 'react';
import Image from 'next/image'
import Tcard from 'root/components/tCard'
import Social from 'root/components/social'
import Button2 from 'root/components/button2'

import 'root/globals.css'

import stock0 from 'root/public/stock0.webp'
import stock1 from 'root/public/stock1.webp'
import stock2 from 'root/public/stock2.webp'
import stock3 from 'root/public/stock3.webp'
import stock4 from 'root/public/stock4.webp'
import stock5 from 'root/public/stock5.webp'
import stock6 from 'root/public/stock6.webp'
import stock7 from 'root/public/stock7.webp'
import stock8 from 'root/public/stock8.webp'
import stock9 from 'root/public/stock9.webp'

export default function Main()
{
      return <Fragment>
            <div style={{
                  height: '927px',
                  color: 'white',
                  backgroundImage: 'url(' + stock0.src + ')',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
            }}>
                  <div style={{
                        width: 'inherit',
                        height: 'inherit',
                        backgroundImage: '-webkit-linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                  }}>
                        <Image
                              src={stock9.src}
                              width={1016}
                              height={496}
                              alt='logo'
                              style={{paddingBottom: '100px'}}
                        />
                        <strong style={{color: 'rgb(255, 255, 255)'}}><em>Сообщество существует только там, где есть общая деятельность</em></strong>
                  </div>
            </div>
            <div style={{paddingTop: '150px', paddingBottom: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} id='about-us'>
                  <Image
                        src={stock1.src}
                        width={260}
                        height={260}
                        alt='stock1'
                        style={{borderRadius: '50%'}}
                  />
                  <div style={{fontSize: '40px', paddingTop: '50px', paddingBottom: '20px'}}>О наc</div>
                  <div style={{fontSize: '20px', paddingBottom: '30px', textAlign: 'center'}}>Наша команда - ученики проектной школы МАРС,<br/>специализирующейся на наращивание компетенции<br/>в разработке проектов социокультурного значения</div>
            </div>
            <div style={{
                  padding: '180px 0 180px 0',
                  backgroundColor: '#ebebeb',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
            }}>
                  <div style={{fontSize: '36px', marginBottom: '60px'}}>О Проекте</div>
                  <Image
                        src={stock2.src}
                        width={760}
                        height={507.567}
                        alt='stock2'
                  />
                  <div style={{fontSize: '20px', marginTop: '60px', textAlign: 'center'}}><p>Наш проект подразумевает под собой создание сообщества между атомными городами<br/>России для привлечения молодёжи в научную сферу и разработку городских проектов</p></div>
            </div>
            <div style={{
                  paddingTop: '150px',
                  paddingBottom: '180px',
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
            }}>
                  <div style={{fontSize: '42px'}}>В чём суть сообщества?</div>
                  <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                  }}>
                        <Tcard img={stock3.src} title='Связь' text='Создать место, где люди смогут рассказать о своих разработанных проектах'/>
                        <Tcard img={stock4.src} title='Поддержка' text='Чтобы людей, увлеченных разработкой городских проектов, можно было проще заметить'/>
                        <Tcard img={stock5.src} title='Заинтересовать' text='Привлечь в разработку городских проектов заинтересованных людей, готовых помогать проекту'/>
                  </div>
            </div>
            <div style={{
                  backgroundImage: 'url(' + stock6.src + ')',
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
            }}>
                  <div style={{
                        color: 'white',
                        height: '560px',
                        backgroundImage: '-webkit-linear-gradient(top, rgba(0,0,0,0.80), rgba(0,0,0,0.90))',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                  }}>
                        <p style={{textAlign: 'center', fontSize: '48px'}}>Совместно создаем яркое будущее:<br/>зарядим наши атомные города энергией<br/>успеха и инноваций!</p>
                        <Button2 name='присоединиться к сообществу' link='/quiz/auth'/>
                  </div>
            </div>
            <div id='contacts' style={{
                  marginTop: '45px',
                  height: '323.567px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
            }}>
                  <div style={{fontSize: '25px', marginBottom: '45px'}}>НАШИ КОНТАКТЫ</div>
                  <div style={{fontSize: '36px', textAlign: 'center'}}>
                        <a href='tel:+11234567890' style={{textDecoration: 'none'}}>+1 123 456 78 90</a>
                        <br/>
                        <a href='mailto:hello@company.com' style={{textDecoration: 'none'}}>hello@company.com</a>
                  </div>
                  <div style={{fontSize: '20px', marginTop: '45px'}}>Мы в социальных сетях:</div>
                  <div style={{
                        margin: '30px 0 30px 0',
                        width: '170px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                  }}>
                       <Social link='/#' img={stock7.src}/>
                       <Social link='/#' img={stock8.src}/>
                  </div>
            </div>
      </Fragment>
}