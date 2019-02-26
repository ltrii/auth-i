import React, { Component } from 'react'

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
      <div>
        It is what it is.
      </div>
    )
  }
}

export default AppMain;