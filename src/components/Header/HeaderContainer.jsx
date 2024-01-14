import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  };

  render() {
    return (
      <Header {...this.props} />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.auth.isAuthorized,
    userName: state.auth.login,
  };
};

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
