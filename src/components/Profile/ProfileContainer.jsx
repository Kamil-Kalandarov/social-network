import React from 'react';
import { connect } from 'react-redux';
import withRouter from '../WithRouter/WithRouter';
import { getUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.params.userId;

    if(!profileId) {
      profileId = 2
    };

    this.props.getUserProfile(profileId);
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
  };
};

const ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(ProfileContainerWithUrlData);
