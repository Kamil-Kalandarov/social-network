import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    friendsList: state.friendsList
  }
};

const NavbarContainer = connect(mapStateToProps) (Navbar);

export default NavbarContainer;
