import React, { Component } from 'react';
import { connect, Provider } from 'react-redux'; // Add Provider import
import {legacy_createStore as createStore, applyMiddleware } from 'redux'; // Add createStore import
import {thunk} from 'redux-thunk';

import rootReducer from './store/reducers/rootReducer'; // Import your root reducer
import { setToken } from './store/actions/sessionActions';
import { getProfile } from './store/actions/userActions';

import Spinner from './components/spinner/spinner';
import LeftSection from './containers/leftSection/leftSection';
import MainSection from './containers/mainSection/mainSection';
import RightSection from './containers/rightSection/rightSection';

import Login from './spotify/login';
import WebPlaybackReact from './spotify/webPlayback';

window.onSpotifyWebPlaybackSDKReady = () => {};

class App extends Component {
  state = {
    playerLoaded: false,
  };

  componentDidMount() {
    const token = Login.getToken();
    //const { setToken, getProfile, fetchUserProfile } = this.props; // Destructure from props
      console.log('Props:', this.props);
  
    if (!token) {
      Login.logInWithSpotify();
    } else {
      this.setState({ token: token }, function () {
        console.log("9090--9090",this.state.token);
    });
      console.log("Token:", token);

      // Use this.props to call the action creators
      setToken(token);
      getProfile(token);
      const tempToken =   localStorage.getItem('token');
      console.log(tempToken)

    }
  }
  
  

  render() {
    console.log("---lololo",this.state.token)
    let webPlaybackSdkProps = {
      playerName: 'Spotify React Player',
      playerInitialVolume: 1.0,
      playerRefreshRateMs: 1000,
      playerAutoConnect: true,
      token : this.state.token,
      onPlayerRequestAccessToken: () => this.state.token,
      onPlayerLoading: () => {},
      onPlayerWaitingForDevice: () => {
        this.setState({ playerLoaded: true });
      },
      onPlayerError: (e) => {
        console.log(e);
      },
      onPlayerDeviceSelected: () => {
        this.setState({ playerLoaded: true });
      },
    };

    return (
      <div className='app'>
        <WebPlaybackReact {...webPlaybackSdkProps}>
          <Spinner loading={!this.state.playerLoaded}>
            <LeftSection />
            <MainSection />
            <RightSection />
          </Spinner>
        </WebPlaybackReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.sessionReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  getProfile: (token) => dispatch(getProfile(token)),
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply Redux Thunk middleware

// Wrap App component with Provider and provide Redux store
const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default connect(mapStateToProps, mapDispatchToProps)(AppWithStore);

