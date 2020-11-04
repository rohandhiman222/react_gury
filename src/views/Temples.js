import React, {Component} from 'react';
import CharTemPopup from '../components/Popups/CharTemPopup';
import TempleList from '../components/Temple/TempleList';


import templeJson from "../data/charities.json"; 


class Temples extends Component {

    constructor(props){
        super(props);
        this.state = {
            temples:[],
            isLoaded:false
        }
    }

    sumitForm = (data)  => {

        let dataEnt = {
            description:data.description,
            location:data.location,
            name:data.name,
            image: "first.jpg"
        }

        this.setState({
            temples: [dataEnt, ...this.state.temples]
        })

        this.props.handleClick("br")
    }

    componentDidMount(){
        this.setState({
            temples:templeJson.charities
        })
    }


    render() {
        console.log(this.state.temples);
        return (
            <div>
                <div className="page-breadcrumb">
                    <div className="row">
                       
                    <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Charities</h4>
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
                
                <div className="container-fluid">
                  
                <CharTemPopup name="Temple" sumitForm={this.sumitForm} />
              
                     <div className="row el-element-overlay">
                     
                        {this.state.temples.map((item,index) =>(
                            item.type == "temple"? "":
                           <TempleList item={item} />
                           ))}
                       </div>
                          </div>
            </div>
        );
    }
}

export default Temples;