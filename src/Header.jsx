import './Header.css'
import sanwoLogo from './assets/sanwo-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  function openMenu(){
    let menu = document.querySelector("#hamburger-menu")
    if(menu.classList.contains("closed-menu")){
      menu.classList.add("opened-menu")
      menu.classList.remove("closed-menu")
    }
    else{
      menu.classList.remove("opened-menu")
      menu.classList.add("closed-menu")
    }
  }

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
       <div className='menu-btn' onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} size='2xl' style={{color:"rgba(0, 0, 0, 0.55)"}} />
       </div>
      </div>
    )
  }
  
  export default Header