import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  const {auth }= props
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  // const loading = auth.isLoaded ?  null : <p> loading </p> ;
  console.log(auth)
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
      { links }
      {/* { loading } */}
      </div>
    </nav>
  )
}

// about this as this empty is true , it is mean I am signOut
// and in auth , I have "isloaded" also
const mapStateToProps = (state) =>{
  return{
   auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(Navbar)
