import './App.css';
import MyTable from './Components/MyTable';
import {useState, useEffect} from 'react';
import axios from 'axios';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Table1 from './Components/final';
import Boutiqueform from './Components/MyTable';

function App() {
  const [data, setData] = useState([])

  async function getData(){
    let res = await axios.get("http://localhost:8080/getDress");
    setData(res.data);
    console.log(res.data);  
  }

  useEffect(
    () => {
      getData()
    },
  [])

  return (
    <div style={{backgroundColor:"white"}}>
    
    <BrowserRouter>
    <Routes>
  
      <Route path='/' element={<Boutiqueform/>} />
      <Route path='/getdetail' element={<Table1 />} />
      
    </Routes>
  </BrowserRouter>
  </div>

    
  );
}

export default App;