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
      <RowTile/>
    </div>
  );
}

export default App;
