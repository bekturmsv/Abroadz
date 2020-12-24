import Navigation from './containers/Navigation/Navigation';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Head from './containers/Head/Head';
import Home from './pages/Home/Home';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';
import AuthContextProvider from './contexts/AuthContext';
import ProductsContextProvider from './contexts/ProductsContext';
import { history } from './helpers/history';
import Articles from './containers/Articles/Articles';
import SearchPage from './containers/SearchPage/SearchPage'
import ProductLisct from './containers/ProductList/ProductList';
import AdminPage from './containers/AdminPage/AdminPage/AdminPage';
import EditProduct from './containers/AdminPage/EditProduct/EditProduct';
import FilterProduct from './containers/FilterProduct/FilterProduct';
import ProductToDetails from './containers/ProductDetails/ProductDetails';
import Cart from './containers/Cart/Cart'
import Wish from './containers/Wish/Wish'
import TGBlock from './containers/TGBlock/TGBlock';
import Footer from './containers/Footer/Footer';
import CreditCard from './containers/CreditCard/PaymentCard/CreditCard'
const Routes = () => {
    return (
        <BrowserRouter history={history} >
                <ProductsContextProvider>
                <Head /> 
                <Navigation />
            <Switch>
                <AuthContextProvider>
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                </AuthContextProvider>
            </Switch>
            <Switch>
                    <Route exact path="/list" component={ProductLisct}/>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/article" component={Articles} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/admin" component={AdminPage}/>
                    <Route exact path="/edit" component={EditProduct}/>
                    <Route exact path="/filter" component={FilterProduct}/>
                    <Route exact path="/details/:id" component={ProductToDetails}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/wish" component={Wish}/>
                    <Route exact path="/makeorder" component={CreditCard} />

            </Switch>
            <TGBlock/>
            <Footer/>
                </ProductsContextProvider>
        </BrowserRouter>
    );
};

export default Routes;