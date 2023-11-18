import React from 'react'
import myImage1 from './images/home-img.jpg';

function HomePage() {
  return (
    <>
    <h1>Le Monde des Animaux</h1>
    <p>Les types d'animaux en fonction de leur habitat, que ce soit la terre, la mer ou le ciel, sont généralement classés comme suit :</p>


    <div style={{ display: 'flex' , flexDirection: 'column-reverse' }}>
    <div className='left-side'>
    <div className='box'>
      <h2>Animaux terrestres :</h2>
      <p>Ce sont les animaux vivant principalement sur la terre ferme. Cela inclut une vaste gamme d'espèces, des grands mammifères comme les éléphants et les lions aux petits insectes et aux reptiles. </p>
    </div>
    <div className='box'>
       <h2>Animaux marins :</h2>
       <p>Les animaux qui habitent les océans, mers et autres étendues d'eau. Cela englobe les poissons, les mammifères marins comme les baleines et les dauphins, les crustacés et une variété d'autres créatures aquatiques.</p>
   </div>  
   <div className='box'> 
        <h2>Animaux aériens :</h2> 
        <p>Ce sont les animaux qui passent la majorité de leur temps dans les airs. Les oiseaux sont l'exemple le plus évident, mais cela inclut également les chauves-souris et certains insectes comme les papillons.</p>
  </div>
</div>
  <div className='right-side'>
     <img src={myImage1} alt="My Logo" style={{ width: '100%', height: '100%' }} />
  </div>
    
    </div>       
<p>Chaque type d'habitat offre des conditions et des ressources uniques, ce qui a influencé l'évolution et l'adaptation des espèces qui y résident.</p>
    </>
  )
}

export default HomePage