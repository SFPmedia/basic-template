import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/actions";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleFetchData = this.handleFetchData.bind(this);
  }

  // The "handleFetchData()" is made to simulate a user input
  // Currently it refers to the posts with the postID equal to the parameter given in "fetchData()"

  handleFetchData() {
    this.props.fetchData(4);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleFetchData}>Fetch</button>

        <div>Name: {this.props.user}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.fetchDataReducer.user,
    error: state.fetchDataReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(fetchData(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
