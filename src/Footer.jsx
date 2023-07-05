import sanwoLogo from './assets/sanwo-logo.png'

function Footer(){
    return(
        <>
            <div>
                <h3>Read Business insights and tips from Olu</h3>
                <form>
                    <input type="text" name="first-name" placeholder="First name" /><br/>
                    <input type="email" name="mail" placeholder="Email address" />
                    <input type="submit" />
                </form>
                <p>Olu writes the best business growth articles, subscribe to get these articles in your inbox.</p>
            </div>
            <div>
                <div>
                    <div>
                        <h3>Company</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                    </div>
                    <div>
                        <h3>Help</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div><img src={sanwoLogo} /></div>
                    <div>
                        <div><img src="#"  alt="facebook"/></div>
                        <div><img src="#" alt="LinkedIn"/></div>
                        <div><img src="#" alt="Twitter"/></div>
                        <div><img src="#" alt="Instagram"/></div>
                    </div>
                </div>
            </div>
            <p>Copyright 2022. Sanwo Technologies Limited</p>
        </>
    )
}

export default Footer