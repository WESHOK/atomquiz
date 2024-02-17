import CityCard from 'root/components/citycard';
import json from 'root/questions.json';

export default function Quiz()
{
      return (
            <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
            }}>
                  <h1>ВЫБЕРИТЕ ГОРОД:</h1>
                  {json.map((smth) => <CityCard name={smth.name} info={smth.info}/>)}
            </div>
      )
}