// firebase code from https://css-tricks.com/intro-firebase-react/
// https://medium.com/get-it-working/get-googles-firestore-working-with-react-c78f198d2364

import React, { Component } from 'react';
// Router
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

// SVG wrapper
import SVG from './SVG'
import Polygon from './Polygon';

// Polygon utilites

import * as polygonUtils from './PolygonUtils'






class App extends Component {


  render() {

  

    return(
      


      <div className="container">
     
        <h1>Polygons</h1>
       
          <div>
          <SVG >
          {/* <Polygon vertices={[[0,0], [50,0], [50,50], [0,50]]} style={{fill: 'purple', stroke: 'black'}} /> */}
          {/* <Polygon vertices={[[0,10],[-7,7],[-10,0],[-7,-7]]} style={{fill: 'purple', stroke: 'black'}}/> */}
          {/* <Polygon vertices={polygonUtils.polygonVerticesFlatBottom(100,100,6,50)} style={{fill: 'purple', stroke: 'black'}}/>
          <Polygon center={[100,100]} n={6} vertexlength={10} style={{fill: 'purple', stroke: 'black'}}/> */}
          <Polygon center={[100,100]} n={6} vertexlength={50} style={{fill: 'purple', stroke: 'black'}}/> 
          </SVG>
          </div>


      </div>

);

    }; // render


  }; //App





export default App;
