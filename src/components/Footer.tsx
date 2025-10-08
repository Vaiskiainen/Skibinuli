import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-text">
      Vaiskiaisen tekemä. Alkuperäinen idea: The Coding Sloth.
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a
              href="https://github.com/The-CodingSloth/brainrot-games"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Alkuperäinen GitHub repository"
            >
              Alkuperäinen GitHub Repo
            </a>
            <a
              href="https://youtube.com/@vaiskiainen"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="Vaiskiainen YT"
            >
              Vaiskiainen YouTube
            </a>

          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
