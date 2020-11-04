import React, { Component } from 'react';
import SliderPopup from '../components/Popups/SliderPopup.js';
import SliderList from '../components/Slider/SliderList.js';
import SweetAlert from 'react-bootstrap-sweetalert';

import sliderJson from "../data/slider.json"; 


class Slider extends Component {

  constructor(props){
    super(props);
    this.state = {
      slider:[],
      alert: null
    }
  }

  sumitForm = (data)  => {

    let dataEnt = {
      id:Math.floor(Math.random() * 100),
        header:data.header,
        footer:data.footer,
    }

    this.setState({
      slider: [dataEnt, ...this.state.slider]
    })

    this.props.handleClick("br")
}

onDelete = (item) => {
  console.log(item)
  const items = this.state.slider.filter(slide => slide.id !== item.id);
  this.setState({
      slider:items,
      alert: null
  })
}


deleteSlider =(item) => {
  
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

  editSlider = (item) =>{
    console.log(item);
  }


  componentDidMount(){
    this.setState({
      slider:sliderJson
    })
  }


    render() {
        return (

            <div>
                {this.state.alert}
                <div className="page-breadcrumb">
                    <div className="row" >
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Slider</h4>
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
            
                <SliderPopup name="Add" item="" sumitForm={this.sumitForm} />
            <div class="row  m-1">
              {this.state.slider.map((item, index) => (
          <SliderList editSlider={this.editSlider} onDelete={this.deleteSlider} key={index} item={item} />
          ))}
    </div>
    </div>
        );
    }
}

export default Slider;