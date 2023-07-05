import './Header.css'
import sanwoLogo from './assets/sanwo-logo.png'

function Header() {
  
    return (
      <div id='header'>
       <div>
            <img src={sanwoLogo} className="logo" alt="Sanwo logo" />
       </div>
       <ul className='menu'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Products</a></li>
       </ul>
       <div className='header-btns'>
        <div className='start-btn'><button>Start Express Transaction</button></div>
        <div className='sign-up-btn'><button>Sign Up</button></div>
       </div>
      </div>
    )
  }
  
  export default Header