import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
      .then(response => {
        if(response.data.resultCode === 0) {
        const { id, login, email } = response.data.data
        this.props.setUserData(id, login, email)
        } 
      })
  }

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

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
