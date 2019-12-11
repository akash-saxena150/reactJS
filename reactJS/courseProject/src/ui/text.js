import React from 'react';
function BigHeading(props){
    console.log(props);
    return <h1 style={{fontSize: '2rem'}}>{props.children}</h1>
}
export {BigHeading}