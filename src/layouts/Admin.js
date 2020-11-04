import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import NotificationSystem from "react-notification-system";
import { style } from "../variables/Variables.jsx";

import routes from "./../routes.js";

class Admin extends Component {

    constructor(props){
        super(props);
        this.state ={
            _notificationSystem: null,
        }
    }

    handleNotificationClick = position => {
       
        this.state._notificationSystem.addNotification({
          title: <span data-notify="icon" className="pe-7s-gift" />,
          message: (
            <div>
              Successfully  Add
            </div>
          ),
          level: "success",
          position: position,
          autoDismiss: 15
        });
    
    
    };

    componentDidMount() {
        this.setState({ _notificationSystem: this.refs.notificationSystem });
    
    }


    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={props => (
                            <prop.component
                                {...props}
                                handleClick={this.handleNotificationClick}
                            />
                        )}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

  render() {
    return (
      <div id="main-wrapper">
        <AdminNavbar />
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar {...this.props} routes={routes} />
        <div className="page-wrapper">
            <Switch>{this.getRoutes(routes)}</Switch>
         <Footer />
        </div>
      </div>
    );
  }
}

export default Admin;
