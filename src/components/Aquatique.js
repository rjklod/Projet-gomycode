import React from 'react'
import { Data } from './DataAnimal';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Aquatique = ({props}) => {
    return (
      <>
        <h1>Animaux Aquatique</h1>
      <div className='row bloc-items'>
    
      {Data.map(item =>   item.type === 'C' ?  
      <div className='col-md-4 col-xs-12' key={item.id}>
         
            <div className='cart-animal'><img src={item.posterUrl} alt=""style={{ width: '100%', height: '246px' }} /> <ul><li>{item.title}</li><li>{item.origine}</li><li>{item.shortDescription}</li></ul><Link to={`/infoMovie/${item.id}`}  >   <Button variant="info">Details</Button></Link></div>
          </div>
        :null )
        }
    </div>
    </>
    );
  };

export default Aquatique