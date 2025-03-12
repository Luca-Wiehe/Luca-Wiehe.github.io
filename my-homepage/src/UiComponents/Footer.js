import React from 'react';
import socialAccounts from '../Constants/accounts.json';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-links">
                    {Object.entries(socialAccounts).map(([platform, account]) => (
                        <a
                            key={platform}
                            href={account.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label={platform}
                        >
                            <div className="social-icon">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/${account.src}`}
                                    alt={`${platform} icon`}
                                />
                            </div>
                            <span className="platform-name">{platform}</span>
                        </a>
                    ))}
                </div>
                <div className="copyright">
                    © {new Date().getFullYear()} Luca Wiehe. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer; 