import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        style={{backgroundColor: "#333"}}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="row"><div className="col">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="bp" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div></div>
          <div className="col">
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            
              <Link className="navbar-item" to="/about" style={{color: "white"}}>
                Home
              </Link>
              <Link className="navbar-item" to="/products" style={{color: "white"}}>
                Industries
              </Link>
              <Link className="navbar-item" to="/blog" style={{color: "white"}}>
                BidPrime News
              </Link>
              <Link className="navbar-item" to="/contact" style={{color: "white"}}>
                Podcast
              </Link>
              <Link className="navbar-item" to="/contact/examples" style={{color: "white"}}>
                Take a Tour
              </Link>
            </div>
         
          </div></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
