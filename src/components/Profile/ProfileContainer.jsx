import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

/* контейнерная компонента, которая получает пропсы от другой контейнерной компоненты через connect 
и передает их дальше в презентационную копоненту Profile */
class ProfileContainer extends React.Component {

  /* сначала отрабатывает render(), только потом монтирвоание компоненты и обновление стейта */
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      });
  };

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  };
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)