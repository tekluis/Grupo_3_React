import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import LastProductInDb from './LastProduct';
import ContentRowUp from './ContentRowUp';
import ProductsList from './ProductsList';
import PlantasList from './PlantasList';
import MacetasList from './MacetasList';
import UsersList from './UsersList';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Logo"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
              

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ProductsList">
                        <i className="fas fa-list"></i>
                        <span>Products List</span></Link>
                </li>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/UsersList">
                        <i className="fas fa-user"></i>
                        <span>Users List</span></Link>
                </li>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/PlantasList">
                        <i className="fas fa-list"></i>
                        <span>Plantas List</span></Link>
                </li>

                {/*<!-- Nav Item - Search -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/MacetasList">
                        <i className="fas fa-list"></i>
                        <span>Macetas List</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowUP">
                    <ContentRowUp />
                </Route>
                <Route path="/ProductsList">
                    <ProductsList />
                </Route>
                <Route path="/UsersList">
                    <UsersList />
                </Route>
                <Route path="/PlantasList">
                    <PlantasList />
                </Route>
                <Route path="/MacetasList">
                    <MacetasList />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;