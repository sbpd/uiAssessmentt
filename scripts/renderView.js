
import React, { Component } from 'react';
import { views} from './constants';

class RenderView extends Component {
   constructor(){
     super();
  }  

  render() {
    let view1=null;
    if(this.props.view==views.AUDIENCE){
     view1=(<div>Audiences</div>)
    }else if(this.props.view==views.PARTNER){
      view1=(<div>Partners</div>)
    }else{
      view1=(<div>Brands</div>)
    }

    return (
     <div className="inner-div">
       {view1}
      </div>
    );
  }
}

export default RenderView;