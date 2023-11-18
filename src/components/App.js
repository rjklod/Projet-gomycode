import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import InfoMovie from './InfoMovie';
import {Data}  from './DataAnimal';
import NavBar from './NavBar';
import {Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import Aeroterrestre from './Aeroterrestre';
import Terrestre from './Terrestre';
import Aquatique from './Aquatique';
function App ()  {

const [info, setinfo] = useState(Data)
  

 //function cal back



      // Catch Rating value
    

    return (
        <>
        <NavBar />
        
      <Routes>
          <Route path="/" element={ <div className='bady-home'><div className='container text-center mt-3 '> <HomePage/></div></div>}/>
          <Route path="/Aeroterrestre" element={ <div className='bady-1'><div className='container text-center '> <Aeroterrestre/></div></div>}/>
          <Route path="/Terrestre" element={ <div className='bady-2'><div className='container text-center '> <Terrestre/></div></div>}/>
          <Route path="/Aquatique" element={ <div className='bady-3'><div className='container text-center '> <Aquatique props={info}/></div></div>}/>
          <Route path="/infoMovie/:id" element={<div className='bady-info'><InfoMovie props={info}  /></div> }/>  
       </Routes>
            
         
        
        </>
    );
  
}

export default App;
