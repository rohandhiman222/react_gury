import React from 'react';

const TempleList = props => {
    return (
        <div className="col-lg-3 col-md-6">
        <div className="card">
            <div className="el-card-item">
                <div className="el-card-avatar el-overlay-1"><img
                    src="../../assets/images/eve1.jpg" alt="user"/>
                    <div className="el-overlay">
                        <ul className="list-style-none el-info">
                            <li className="el-item"><a
                                className="btn default btn-outline image-popup-vertical-fit el-link"
                                href="../../assets/images/eve1.jpg"><i
                                className="mdi mdi-magnify-plus"></i></a></li>
                            <li className="el-item"><a className="btn default btn-outline el-link"
                                                       href="javascript:void(0);"><i
                                className="mdi mdi-link"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="el-card-content">
    <h4 className="m-b-0"><i className="fa fa-map-marker"></i> {props.item.name}</h4> <span className="text-muted">{props.item.description}</span>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TempleList;