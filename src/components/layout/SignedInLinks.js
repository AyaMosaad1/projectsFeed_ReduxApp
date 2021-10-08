import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions';

//we call props Not functions so we don't put () ....

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
      </ul>
    </div>
  )
}


const mapDispatchToProps = dispatch =>{
  return {
    signOut : () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
