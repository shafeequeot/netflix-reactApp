import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./app.css"
import Banner from './Components/Banner/Banner';
import RowTile from './Components/rowTile/rowTile';
import Multipage from './Components/MultiPage/multipage';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <Multipage/>

      <Banner/>
      <RowTile title="Other Rocks"/>
      <RowTile title="OtRocks 111" size="small"/>
    </div>
  );
}

export default App;
