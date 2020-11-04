import React, {Component} from 'react';

class Shops extends Component {
    render() {
        return (
            <div>
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Shops</h4>
                            <div className="ml-auto text-right">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="row">
                        <div className="card" style={{width: "300px", margin:"15px"}}>
                            <img src="../../assets/images/vegan1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Restaurants Name Here</h5>
                                    <p className="card-text"> 84 Main Collins Street New York.</p>
                                </div>
                        </div>

                     <div className="card" style={{width: "300px", margin:"15px"}}>
                         <img src="../../assets/images/vegan1.jpg" className="card-img-top" alt="..." />
                         <div className="card-body text-center">
                             <h5 className="card-title">Restaurants Name Here</h5>
                             <p className="card-text"> 84 Main Collins Street New York.</p>
                         </div>
                     </div>

                     <div className="card" style={{width: "300px", margin:"15px"}}>
                         <img src="../../assets/images/vegan1.jpg" className="card-img-top" alt="..." />
                         <div className="card-body text-center">
                             <h5 className="card-title">Restaurants Name Here</h5>
                             <p className="card-text"> 84 Main Collins Street New York</p>
                         </div>
                     </div>
                    </div>

            </div>
        );
    }
}

export default Shops;