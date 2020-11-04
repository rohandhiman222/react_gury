import React from 'react';
import PropTypes from 'prop-types';

const CharityLIst = props => {

    function onDeleteHandler(data){
        //console.log(data);
        props.onDelete(props.item)
    }

    return (

        <div className="d-flex flex-row comment-row m-t-0">
            <div className="p-2"><img src="../../assets/images/eve2.jpg" alt="user" width="100"
            /></div>
            <div className="comment-text w-100">
                <h6 className="font-medium"><i className="fa fa-map-marker"></i> {props.item.name}</h6>
                <span className="m-b-15 d-block">{props.item.description} </span>
                <div className="comment-footer">
                    <span className="text-muted float-right">April 14, 2016</span>
                    <button type="button" className="btn btn-cyan btn-sm">Edit</button>
                    <button type="button" className="btn btn-success btn-sm">Publish</button>
                    <button type="button" onClick={() =>onDeleteHandler(props.item)} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>


    );
};

CharityLIst.propTypes = {

};

export default CharityLIst;