import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';
const click = () => {
  console.log("ok clicked")
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={click}/>
  </div>,
  document.getElementById('root')
);
    // <SimplerComponent handleClick={undefined} />
