import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar'
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
//main
    render() {
        // if (!this.props.initialized){
        //     return <Preloader />
        // }
        return (
            <div className={''}>
                <div className={'particles'}>
                    <Particles params={particleOpt}/>
                </div>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content '}>
                        {/*<Redirect from={'/'} to={'/profile'}/>*/}
                        <Route path={'/dialogs'}
                               render={() => <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'}
                               render={() => <ProfileContainer/>}/>
                        <Route path={'/friends'}
                               render={() => <FriendsContainer/>}/>
                        <Route path={'/users'}
                               render={() => <UsersContainer/>}/>
                        <Route path={'/login'}
                               render={() => <LoginPage/>}/>

                    </div>
                </div>
            </div>
        );
    }
}


// Redirect work wrong after refresh

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps,{initializeApp}))(App);
