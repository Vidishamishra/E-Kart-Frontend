import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Menu from './core/Menu';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './Admin/AddCategory';
import AddProduct from './Admin/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/signup" exact component={Signup} />
                    <PrivateRoute  path="/user/dashboard" exact component={Dashboard}/>
                    <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                    <AdminRoute path="/create/category" exact component={AddCategory} />
                    <AdminRoute path="/create/product" exact component={AddProduct}/>
                    <Route path="/product/:productId" exact component={Product} />
                    <Route path="/cart" exact component={Cart} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;