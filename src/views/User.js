import React, { Component } from 'react';
import UserList from '../components/User/UserList';

import "./../Assets/table.css";

class User extends Component {
    render() {
        return (
            <div>
<div className="page-breadcrumb">
                    <div className="row" >
                        <div className="col-12 d-flex no-block align-items-center">
                            <h4 className="page-title">Users</h4>
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

                <br />
                <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>						
                        <th>Date Created</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   <UserList />
                  </tbody>
            </table>
       
            </div>
        );
    }
}

export default User;