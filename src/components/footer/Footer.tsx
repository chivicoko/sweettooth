import { Link } from "react-router-dom";
import "./footer.scss";


const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <span className="logoText"><Link to={'/'}>Sweet Tooth</Link></span>
        <div className="info">
          <div className="category">
            <div className="title">Category</div>
            <ul className="list">
              <li className="listItem item">
                <Link to={'/'}>Home</Link>
              </li>
              <li className="listItem item">
                <Link to={'/'}>Product</Link>
              </li>
              <li className="listItem item">
                <Link to={'/cart'}>Cart</Link>
              </li>
            </ul>
          </div>
          <div className="contact">
            <div className="title">Contact</div>
            <ul className="list">
              <li className="listItem item">
                <Link to={'#'}>+234 7013417684</Link>
              </li>
              <li className="listItem item">
                <Link to={'#'}>winnie@gmail.com</Link>
              </li>
              <li className="listItem itemIcons">
                <span className="icons">
                  <Link to={'#'}>
                    <img src="./images/instagram2.png" alt="instagram" loading="lazy" />
                  </Link>
                  <Link to={'#'}>
                    <img src="./images/facebook.png" alt="facebook" loading="lazy" />
                  </Link>
                  <Link to={'#'}>
                    <img src="./images/twitter.png" alt="twitter" loading="lazy" />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <p>Subscribe To Our Newsletter</p>
          <div className="inputGroup">
            <input type="text" placeholder="Email" />
            <img src="./images/mail.png" alt="mail" loading="lazy" />
          </div>
        </div>
      </div>

      <p className="lowerFooter">&copy; Sweet Tooth 2024</p>
    </div>
  )
}

export default Footer;