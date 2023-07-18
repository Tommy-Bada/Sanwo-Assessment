import './HamburgerMenu.css'

function HamburgerMenu(){

    function closeOrOpenProductLink(){
        let productLink = document.querySelector("#product-link")
        if(productLink.classList.contains("product-link-close")){
            productLink.classList.remove("product-link-close")
            productLink.classList.add("product-link-open")
        } else{
            productLink.classList.add("product-link-close")
            productLink.classList.remove("product-link-open")
        }
    }

    return(
        <div id="hamburger-menu" className="closed-menu">
            <ul className='ham-menu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
                <li onClick={closeOrOpenProductLink}>Product</li>
            </ul>
            <div id='product-link' className='product-link-close'>
                <p><a href="#">Sanwo Classic</a></p>
                <p><a href="#">Sanwo Express</a></p>
                <p><a href="#">Sanwo Travels</a></p>
            </div>
            <div className='menu-btns'>
                <div className='menu-start-btn'><button>Start Express Transaction</button></div>
                <div className='menu-sign-up-btn'><button>Sign Up</button></div>
            </div>
        </div>
    )
}

export default HamburgerMenu