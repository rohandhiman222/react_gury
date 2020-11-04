import React from 'react';
import SliderPopup from "../Popups/SliderPopup";

const SliderList = (props) => {

  function onDeleteHandler(data){
    //console.log(data);
    props.onDelete(props.item)
  }

  function onEditHandler(item) {
      props.editSlider(item);
  }

    return (
        <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{props.item.header}</h5>
            <p class="card-text">{props.item.footer}.</p>
            <SliderPopup name="edit" item={props.item} sumitForm="hello" />
          
            <a href="#" onClick={() =>onDeleteHandler(props.item)} class="btn btn-danger">Delete</a>
          </div>
        </div>
      </div>
    );
};

export default SliderList;