import React, { Component } from 'react';
import './index.css';
import LargeBoard from './components/LargeBoard'


class App extends Component {
 render() {
   return (
     <div className="App">
       <main>
         <LargeBoard />
       </main>
     </div>
   );
 }
}

export default App;
