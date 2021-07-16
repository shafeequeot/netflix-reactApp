import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import "./app.css"
import Banner from './Components/Banner/Banner';
import RowTile from './Components/rowTile/rowTile';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowTile title="Other Rocks"/>
      <RowTile title="OtRocks 111" size="small"/>
    </div>
  );
}

export default App;
