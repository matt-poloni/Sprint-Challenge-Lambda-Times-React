import React from 'react';

const withAuthenticate = LoggedInComp => LoggedOutComp =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      }
    }

    componentDidMount() {
      localStorage.getItem('username') && this.setState({ loggedIn: true });
    }

    render() {
      return this.state.loggedIn
        ? <LoggedInComp />
        : <LoggedOutComp />;
    }
  };

export default withAuthenticate;