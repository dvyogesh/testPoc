
import React, { Component } from 'react';

class Responsive extends Component {
  render() {
    return (
     <div className="container-second">
         <div className="row">
             <div className="col-12 blk-bk wht-txt">
                 <h1>Jahstafari Tunes</h1>
             </div><div className="sample"></div>
         </div>
         <div className="row">
          <div className="sample"></div>
             <div className="col-4 red-bk"> 
                 <h2>Roots</h2>
             </div>
             <div className="sample"></div>
             <div className="col-4 ylw-bk">
                 <h2>Dancehall</h2>
             </div>
             <div className="sample"></div>
             <div className="col-4 grn-bk">
                 <h2>Dub</h2>
             </div>  <div className="sample"></div>  
         </div>
     </div>
    )
  }
}

export default Responsive;




