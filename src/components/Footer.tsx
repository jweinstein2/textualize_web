import './Footer.css'
import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Textualize Logo" />
                </div>
                <nav className="footer-nav">
                    <div className="footer-section">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="mailto:jaredweinstein1+textualize@gmail.com">Contact Us</a></li>
                            <li><a href="https://github.com/jweinstein2/textualize/issues/new?labels=bug&template=bug_report.md">File a bug</a></li>
                            <li><a href="https://github.com/jweinstein2/textualize/issues/new?labels=enhancement&template=feature_request.md">Request a feature</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="https://github.com/jweinstein2/textualize">GitHub</a></li>
                            <li><a href="https://github.com/jweinstein2/textualize/releases/latest">Download</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
} 