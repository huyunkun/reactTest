import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Home from './pages/Home';
import './css/index.css'
import img1 from './images/2.jpg'

if (module.hot) {
    module.hot.accept(() => {
      ReactDom.render(
          <AppContainer>
              <Home />
          </AppContainer>,
          document.getElementById('root')
      )
    })
  }

// class App extends Component {
//     render() {
//         return <div>
//                 <h1 className="container"> Hello, world! </h1>
//                 <img src={img1} alt="图片1"/>
//                 <h1 className="container"> Hello, world! </h1>
//         </div>
        
//     }
// }

ReactDom.render(
    <AppContainer>
        <Home />
    </AppContainer>,
    document.getElementById('root')
)