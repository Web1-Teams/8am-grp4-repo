import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        {/* أيقونات التواصل الاجتماعي */}
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-google"></i>
          </a>
        </div>

        {/* روابط الفوتر */}
        <div className="footerNav">
          <ul>
            <li>
              <a href="./Index_Developers.html" target="_blank" rel="noopener noreferrer">
                Our Team
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </div>

      {/* الجزء السفلي للفوتر */}
      <div className="footerBottom">
        <p>
          Copyright &copy; 2024; Designed by <span className="designer">Our Team</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
