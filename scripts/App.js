import React, { Component } from 'react';
import RenderView from './renderView';
import { views} from './constants';

class App extends Component {
   constructor(){
     super();
     this.state = {currentView: views.AUDIENCE};
  }  

  viewChange=(e)=>{
    this.setState({currentView : e.target.id})
  }

  render() {
    return (
     <div className="container">
       <button type="button" className="button-selected" id="Audiences" onClick={this.viewChange}>Audiences</button>
       <button type="button" className="button-selected" id="Partners" onClick={this.viewChange}>Partners</button>
       <button type="button" className="button-selected" id="Brands" onClick={this.viewChange}>Brands</button>
       <RenderView view={this.state.currentView}/>
      </div>
    );
  }
}

export default App;