// Collection of utilites for generating polygons

// Generate vertices of n-gon given center and side-length

// vector addition
export let vectoradd = (a,b) => {
    return a.map((e,i) => e + b[i]);
};

// dot product
export let dotproduct = (a,b) => {
    return a.map((e,i) => e*b[i]).reduce((c,d)=> c+d,0);
};


// 2D matrix multiplication
export let matrixmult = (matrix, vec) => {
    let newvec=matrix.map(item => dotproduct(item,vec));
    return newvec;
};

// 2D rotation matrix
export let rotationMatrix2D = (angle) => {
    return [[Math.cos(angle),-1*Math.sin(angle)],[Math.sin(angle),Math.cos(angle)]];
};



// n-gon vertices for a polygon w/ a pointy top.  center is a two-component array
export let polygonVerticesPointyTop = (center,n,vertexlength) =>{

    let upvector= [0,vertexlength];
    let vertices=[upvector];
    let angle=2*Math.PI/n;
    let rot=rotationMatrix2D(angle);
    for (var i=1; i<n; i++) {
        vertices.push(matrixmult(rot,vertices[vertices.length-1]));
    };

    let shiftedvertices=vertices.map(i=>vectoradd(i,center));

    return shiftedvertices;
};

// n-gon vertices for a polygon w/ a flat top
export let polygonVerticesFlatTop = (center,n,vertexlength) =>{
    
    let upvector= [0,vertexlength];
    let flatangle=1/n*Math.PI;
    let upvectorRotated=matrixmult(rotationMatrix2D(flatangle),upvector);
    let vertices=[upvectorRotated];
    let angle=2*Math.PI/n;
    let rot=rotationMatrix2D(angle);
    for (var i=1; i<n; i++) {
        vertices.push(matrixmult(rot,vertices[vertices.length-1]));
    };

    let shiftedvertices=vertices.map(i=>vectoradd(i,center));

    return shiftedvertices;
};


// n-gon vertices for a polygon w/ a flat bottom
export let polygonVerticesFlatBottom = (center,n,vertexlength) =>{
    
    let upvector= [0,-vertexlength];
    let flatangle=1/n*Math.PI;
    let upvectorRotated=matrixmult(rotationMatrix2D(flatangle),upvector);
    let vertices=[upvectorRotated];
    let angle=2*Math.PI/n;
    let rot=rotationMatrix2D(angle);
    for (var i=1; i<n; i++) {
        vertices.push(matrixmult(rot,vertices[vertices.length-1]));
    };

    let shiftedvertices=vertices.map(i=>vectoradd(i,center));

    return shiftedvertices;
};