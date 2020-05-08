// firebase code from https://css-tricks.com/intro-firebase-react/
// https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364

import React, { Component } from 'react';
// Router
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

// SVG wrapper
import SVG from './SVG'
import Polygon from './Polygon';

// Grids
import SquareGrid from './SquareGrid'
import HexGridFlat from './HexGridFlat';
import HexGridFlatLabels from './HexGridFlatLabels';

// Import maps
import * as basicMap from './data/maps/Basic'


// Set the basics of the map
let {nx,ny,origin,edgelength} = basicMap.mapDims;

let initialhexes=basicMap.initialhexes


let initialState={
  hexes: initialhexes,
};



class App extends Component {

  state=initialState;


  // change hex color on entering with mouse

  handleHexEnter = (i) => {
    const hexes=this.state.hexes;
    hexes[i].fill='white';
    this.setState({
      hexes: hexes,
    })
  }

  // change hex color on entering with mouse

  handleHexLeave = (i) => {
    const hexes=this.state.hexes;
    hexes[i].fill='brown';
    this.setState({
      hexes: hexes,
    })
  }


  render() {

  

    return(
      


      <div className="container">
     
        <h1>Polygons</h1>
        <div>
          <SVG height={1000} width={1000}>
          {this.state.hexes.map((item,i)=>{
  return (
    <Polygon key={item.center}
     center={item.center}
      n={6}
      edgelength={item.edgelength}
      style={{fill: item.fill,stroke: item.stroke, strokeWidth: item.strokeWidth}}
      onMouseEnter={() => this.handleHexEnter(i)}
      onMouseLeave={() => this.handleHexLeave(i)}
      /> //{...props} allows us to pass through, e.g., style props to the SVG
        );
          })};
          <HexGridFlatLabels nx={nx} ny={ny} edgelength={edgelength} origin={origin} />
          </SVG>
          
        </div>



      </div>

);

    }; // render


  }; //App





export default App;
