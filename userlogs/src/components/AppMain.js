import React, { Component } from 'react'

import '../App.css';

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../actions';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      initialized: false
    }
  }

  componentDidMount(){
    if(!this.state.initialized){
      // this.props.fetchingLogs();
      }
      this.setState({
        initialized: true
  })
  }
  render() {
    return (
      <div className='MainTest'>
        <RegisterForm registerUser={this.props.registerUser} />
        <LoginForm loginUser={this.props.loginUser} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    registerUser: state.userReducer.registerUser,
    loginUser: state.userReducer.loginUser
  };
};

export default connect(mapStateToProps, { registerUser, loginUser })(AppMain);