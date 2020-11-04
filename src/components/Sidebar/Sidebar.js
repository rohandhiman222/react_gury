import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

    activeRoute(routeName) {
        return this.props.location.pathname == routeName ? "active" : "";
    }
  render() {

    return (
        <aside className="left-sidebar" data-sidebarbg="skin5">

          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav" className="p-t-30">

                {this.props.routes.map((prop, key) => {
                  if (!prop.redirect)
                    return (
                        <li
                            className={
                                this.activeRoute(prop.layout + prop.path)
                                    ? " active sidebar-item"
                                    : "sidebar-item"
                            }
                            key={key}
                        >
                          <NavLink
                              to={prop.layout + prop.path}
                              className="sidebar-link waves-effect waves-dark sidebar-link"
                              activeClassName="active"
                          >
                              <i className="mdi mdi-view-dashboard"></i>
                              <span className="hide-menu">{prop.name}</span>
                          </NavLink>
                        </li>
                    );
                  return null;
                })}


              </ul>
            </nav>
          </div>
        </aside>
    );
  }
}

export default Sidebar;
