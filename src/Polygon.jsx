// SVG Polygons
import React from 'react';

// Polygon utilites
import * as polygonUtils from './PolygonUtils'

let handleClick = () =>{
alert('test');
};


let Polygon = (props) => {
 
    // Polygon vertices in coordinate pairs as 2-components arrays within arrays, e.g.
    // vertices=[[1,2],[3,4],..]
      let {center,n,vertexlength} = props

      let vertices=polygonUtils.polygonVerticesFlatBottom(center,n,vertexlength)

    // Define default props here, if desired
      Polygon.defaultProps= {
          
      };

      

      return (
       
         <polygon 
         {...props} //This let us feed in whatever other props we want ot the polygon, e.g. styling
         points={vertices.map(p => p.join(',')).join(' ')}
         onClick={handleClick}/>


      ); // return

}; //Polygon

export default Polygon;