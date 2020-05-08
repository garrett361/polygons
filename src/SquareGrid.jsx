// Outputs an array of squares arranged in a grid
import React from 'react';

// Polygon utilites
import * as polygonUtils from './PolygonUtils'
// Polygon creator
import Polygon from './Polygon'



// required SquareGrid props:
// nx: number of x grid points
// ny: number of y grid points
// dx: spacing between x points
// dy: spacing between y points
// origin: 2-component vector marking origin of the grid
// edgelength: length of square edge 
// vertexlength: length from polygon center to vertices; used if no edgelength provided
// dx=dy=2*edgelength corresponds to zero gap between squares

let SquareGrid = (props) => {

    let {nx,ny,dx,dy,origin,edgelength,vertexlength} = props;


    let gridpoints=polygonUtils.squareGrid(nx,ny,dx,dy,origin);
    
    let gridFill = gridpoints.map((item)=>{

        return (
            <Polygon key={item} center={item} n={4} edgelength={edgelength} vertexlength={vertexlength} {...props}/> //{...props} allows us to pass through, e.g., style props to the SVG
        );
    })
    
      return gridFill;
      
}; //SquareGrid

export default SquareGrid;