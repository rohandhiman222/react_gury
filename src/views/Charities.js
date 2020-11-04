import React, {Component} from 'react';
import CharityLIst from '../components/Charity/CharityLIst';
import CharTemPopup from '../components/Popups/CharTemPopup';
import SweetAlert from 'react-bootstrap-sweetalert';

import charitiesJson from "../data/charities.json"; 

class Charities extends Component {

    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            charities:[],
            alert: null
        }

    }

     sumitForm = (data)  => {
    
        let dataEnt = {
            id:Math.floor(Math.random() * 100),
            description:data.description,
            location:data.location,
            name:data.name,
            image: "first.jpg"
        }

        this.setState({
            charities: [dataEnt, ...this.state.charities]
        })

        this.props.handleClick("br")
    }

    componentDidMount(){
        this.setState({
            isLoaded:true,
            charities:charitiesJson.charities
        })
    }

    onDelete = (item) => {
        console.log(item)
        const items = this.state.charities.filter(charity => charity.id !== item.id);
        this.setState({
            charities:items,
            alert: null
        })
    }

    deleteCharity =(item) => {
    const getAlert = () => (
        <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={()=>this.onDelete(item)}
        onCancel={this.onCancel}
        focusCancelBtn
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
      );
  
      this.setState({
        alert: getAlert()
      });
    }
  
   
    onCancel = () =>{
        this.setState({
            alert: null
          });
    }
  

    render() {
        return (
            <div>
                {this.state.alert}
              <div className="page-breadcrumb">
                    <div className="row" >
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
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                           
                            <CharTemPopup name="Charity" sumitForm={this.sumitForm} />
                        </div>
                        <div className="comment-widgets scrollable">
                    {this.state.charities.map((item, index)=>(
                            item.type == "charity"?"":
                            <CharityLIst onDelete={this.deleteCharity} item={item} key={index} />
                    ))}
                        
                    
                         </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Charities;