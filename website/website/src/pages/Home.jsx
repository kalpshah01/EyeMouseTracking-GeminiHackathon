import { Link } from 'react-router-dom'

const features = [
    { icon: '👁️', title: 'Iris-Based Cursor Control', desc: 'Your iris position maps directly to mouse position on screen — fluid, accurate, no hand movement needed.' },
    { icon: '👆', title: 'Blink Gesture Clicks', desc: 'Short, double, medium, and long blinks perform left click, double click, right click, and scroll toggle.' },
    { icon: '🧠', title: 'Adaptive ML Engine', desc: 'Learns YOUR unique blink speed, eye openness, and movement style. Gets smarter after every 15 blinks.' },
    { icon: '🔄', title: 'Instant Eye Switching', desc: 'If the tracking eye leaves frame, the system instantly switches to the other eye with zero interruption.' },
    { icon: '📍', title: '9-Point Calibration', desc: 'Full-screen 9-point calibration for accurate edge, corner, and taskbar access coverage.' },
    { icon: '👥', title: 'Multi-User Profiles', desc: 'Unlimited profiles. Each with its own calibration, ML model, and settings — perfect for shared devices.' },
    { icon: '⏸️', title: 'Auto-Pause on Face Loss', desc: 'If both eyes leave frame, cursor freezes with a PAUSED banner. Resumes automatically when you return.' },
    { icon: '📜', title: 'Scroll Mode', desc: 'Rate-limited quadratic scroll curve — look up or down to scroll smoothly in any application.' },
    { icon: '🔔', title: 'System Notifications', desc: 'OS-native toast notifications for all major events. No extra apps needed on Windows, macOS, or Linux.' },
    { icon: '⚙️', title: 'Live Sensitivity', desc: 'Press + / − during tracking to adjust cursor sensitivity on the fly without recalibrating.' },
    { icon: '👤', title: 'Second Face Alert', desc: 'Detects when another face enters the camera view and shows a real-time OS notification + in-app banner.' },
    { icon: '🎓', title: 'Built-in Tutorial', desc: '6-page interactive tutorial opens on first launch. Press T at any time to reopen it during tracking.' },
]

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg" />
                <div className="hero-grid" />
                <div className="container hero-content">
                    <div className="hero-badge">
                        <span className="dot" />
                        v5.4 — Latest Release
                    </div>

                    <h1 className="hero-title">
                        Control Your PC<br />
                        <span className="gradient-text">With Your Eyes</span>
                    </h1>

                    <p className="hero-sub">
                        Eye Tracking Mouse turns any standard webcam into a hands-free mouse.
                        Blink to click, look to scroll — no special hardware required.
                    </p>

                    <div className="hero-buttons">
                        <a
                            className="btn btn-primary btn-lg"
                            href="/EyeTrackingMouse_v5.4.0_Windows.zip"
                            download
                        >
                            <span className="btn-icon">🪟</span>
                            Download for Windows
                        </a>
                        <Link to="/how-to-use" className="btn btn-secondary btn-lg">
                            <span className="btn-icon">📖</span>
                            How to Use
                        </Link>
                        <Link to="/download" className="btn btn-ghost btn-lg">
                            All Platforms ↓
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-val">5.4</div>
                            <div className="hero-stat-label">Current Version</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-val">9-pt</div>
                            <div className="hero-stat-label">Calibration</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-val">4</div>
                            <div className="hero-stat-label">Blink Gestures</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-val">∞</div>
                            <div className="hero-stat-label">User Profiles</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="section" id="features" style={{ background: 'var(--bg2)' }}>
                <div className="container">
                    <h2 className="section-title">Everything in v5.4</h2>
                    <p className="section-sub">
                        A complete hands-free mouse solution powered by AI — trained and refined for real daily use.
                    </p>
                    <div className="features-grid">
                        {features.map(f => (
                            <div key={f.title} className="feature-card">
                                <span className="feature-icon">{f.icon}</span>
                                <div className="feature-title">{f.title}</div>
                                <div className="feature-desc">{f.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS QUICK VIEW */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Requirements</h2>
                    <p className="section-sub">Minimal dependencies — just 4 Python libraries on top of Python 3.9–3.11.</p>

                    <div className="alert alert-warning" style={{ maxWidth: 700, margin: '0 auto 32px' }}>
                        <span className="alert-icon">⚠️</span>
                        <span><strong>Python 3.9, 3.10, or 3.11 required.</strong> MediaPipe does NOT support Python 3.12+ on all platforms. Use Python 3.10 for best compatibility.</span>
                    </div>

                    <div className="table-wrap" style={{ maxWidth: 700, margin: '0 auto' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Library</th>
                                    <th>Purpose</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="kbd">opencv-python</span></td>
                                    <td>Camera feed, frame rendering, on-screen UI</td>
                                    <td>~75 MB</td>
                                </tr>
                                <tr>
                                    <td><span className="kbd">mediapipe</span></td>
                                    <td>Face landmark detection (468 points + iris)</td>
                                    <td>~250 MB</td>
                                </tr>
                                <tr>
                                    <td><span className="kbd">pynput</span></td>
                                    <td>Mouse control — move, click, scroll</td>
                                    <td>~3 MB</td>
                                </tr>
                                <tr>
                                    <td><span className="kbd">numpy</span></td>
                                    <td>Math, EAR calculation, smoothing buffers</td>
                                    <td>~20 MB</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center text-muted mt-16" style={{ fontSize: '0.85rem' }}>
                        Total: ~350 MB. All other features use Python's built-in stdlib — nothing extra needed.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--bg2)', paddingBottom: 100 }}>
                <div className="container text-center">
                    <h2 className="section-title">Ready to Start?</h2>
                    <p className="section-sub">Download the app and follow our step-by-step setup guide for your OS.</p>
                    <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                        <Link to="/download" className="btn btn-primary btn-lg">
                            <span className="btn-icon">⬇️</span>
                            Download Now
                        </Link>
                        <Link to="/how-to-use" className="btn btn-secondary btn-lg">
                            View Setup Guide
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
