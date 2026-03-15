import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span>👁️</span>
                            <span>EyeMouse</span>
                        </div>
                        <p className="footer-desc">
                            Control your PC entirely with your eyes. Eye Tracking Mouse v5.4 —
                            no special hardware needed, just a standard webcam.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Navigate</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/how-to-use">How to Use</Link></li>
                            <li><Link to="/download">Download</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/how-to-use#setup">Setup Guide</Link></li>
                            <li><Link to="/how-to-use#shortcuts">Keyboard Shortcuts</Link></li>
                            <li><Link to="/how-to-use#gestures">Blink Gestures</Link></li>
                            <li><Link to="/how-to-use#troubleshoot">Troubleshooting</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Download</h4>
                        <ul>
                            <li><Link to="/download">Windows (v5.4.0)</Link></li>
                            <li><Link to="/download">macOS (Coming Soon)</Link></li>
                            <li><Link to="/download">Linux (Coming Soon)</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2025 EyeMouse — Eye Tracking Mouse Control v5.4</span>
                    <span>Built with ❤️ using Python, MediaPipe & OpenCV</span>
                </div>
            </div>
        </footer>
    )
}
