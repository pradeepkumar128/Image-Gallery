import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li>Jaunpur, Uttar Pradesh India</li>
            </ul>
            <div className="social-icons mt-3">
              <a
                href="https://www.instagram.com/ipradeepprajapat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://github.com/pradeepkumar128"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/pradeep-prajapati-614079223"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
          <p>© 2024. All Rights Reserved.</p>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
