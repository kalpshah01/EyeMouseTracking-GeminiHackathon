import { Link } from 'react-router-dom'

const techStack = [
    { icon: '🐍', name: 'Python 3.10', desc: 'Core language — 3.9 to 3.11 supported' },
    { icon: '📷', name: 'OpenCV', desc: 'Camera feed, frame rendering, UI overlay' },
    { icon: '🧠', name: 'MediaPipe', desc: 'Face landmark detection — 468 points + iris via Tasks API' },
    { icon: '🖱️', name: 'pynput', desc: 'Cross-platform mouse control — no pyscreeze conflicts' },
    { icon: '🔢', name: 'NumPy', desc: 'Math, EAR calculation, smoothing buffers' },
    { icon: '⚡', name: 'Adaptive ML', desc: 'Custom-built ML engine that learns your unique blink style' },
]

const timeline = [
    { ver: 'v1.0', desc: 'Basic iris tracking and cursor movement proof of concept.' },
    { ver: 'v2.0', desc: 'Added blink detection for clicking and a simple calibration system.' },
    { ver: 'v3.0', desc: 'Multi-user profile system introduced. Eye auto-selection added.' },
    { ver: 'v4.0', desc: 'Adaptive ML engine introduced — blink thresholds now personalise over time.' },
    { ver: 'v5.0', desc: 'MediaPipe Tasks API migration. System notifications. Second face alert.' },
    { ver: 'v5.4', desc: 'Current release. Scroll mode, corner popups, instant eye switching, tutorial system, and PyInstaller builds.' },
]

export default function AboutUs() {
    return (
        <>
            <div className="page-header">
                <div className="page-header-bg" />
                <div className="container">
                    <h1>💡 About <span className="text-gradient">EyeMouse</span></h1>
                    <p>The story behind Eye Tracking Mouse Control — what it is, how it works, and what it's built on.</p>
                </div>
            </div>

            {/* ABOUT MAIN */}
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-visual">
                            <div className="about-orb">👁️</div>
                        </div>
                        <div className="about-text">
                            <h2>What is <span className="text-gradient">EyeMouse?</span></h2>
                            <p>
                                Eye Tracking Mouse Control is an open-source, AI-powered assistive technology that lets you
                                control your computer mouse entirely using your eyes — no special hardware required, just a
                                standard webcam.
                            </p>
                            <p>
                                Built in Python using MediaPipe, OpenCV, and a custom Adaptive ML engine, it provides a
                                complete hands-free mouse experience. Blink to click, look to scroll, and let the system learn
                                your unique blink style over time.
                            </p>
                            <p>
                                Originally created as an accessibility tool, it's now a full-featured v5.4 release with
                                multi-user profile support, 9-point calibration, blink gesture recognition, and builds for
                                Windows (macOS/Linux coming soon).
                            </p>
                            <div className="about-tags">
                                <span className="about-tag">🧠 Adaptive ML</span>
                                <span className="about-tag">♿ Accessibility</span>
                                <span className="about-tag">🐍 Python</span>
                                <span className="about-tag">📷 MediaPipe</span>
                                <span className="about-tag">🖥️ Windows</span>
                                <span className="about-tag">🍎 macOS</span>
                                <span className="about-tag">🐧 Linux</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section" style={{ background: 'var(--bg2)' }}>
                <div className="container">
                    <h2 className="section-title">How It Works</h2>
                    <p className="section-sub">From webcam pixels to precise mouse control — the full pipeline.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
                        {[
                            { icon: '📹', step: '01', title: 'Camera Capture', desc: 'OpenCV captures your webcam feed at runtime — no special camera hardware needed.' },
                            { icon: '🔍', step: '02', title: 'Face Detection', desc: "MediaPipe's Face Landmarker detects 468 facial landmarks including iris positions in real time." },
                            { icon: '📐', step: '03', title: 'Iris Mapping', desc: "9-point calibration maps your iris movement to screen coordinates. Recalibrate any time with 'R'." },
                            { icon: '🤖', step: '04', title: 'Adaptive ML', desc: 'The custom ML engine learns your blink speed and eye openness, personalising gesture thresholds after ~15 blinks.' },
                            { icon: '🖱️', step: '05', title: 'Mouse Control', desc: 'pynput translates iris position and blink gestures into real OS-level mouse moves, clicks, and scrolls.' },
                        ].map(item => (
                            <div key={item.step} className="feature-card" style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{item.icon}</div>
                                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Step {item.step}</div>
                                <div className="feature-title">{item.title}</div>
                                <div className="feature-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Technology Stack</h2>
                    <p className="section-sub">What EyeMouse is built on — all open-source, all cross-platform.</p>

                    <div className="features-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
                        {techStack.map(t => (
                            <div key={t.name} className="feature-card">
                                <span className="feature-icon">{t.icon}</span>
                                <div className="feature-title">{t.name}</div>
                                <div className="feature-desc">{t.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VERSION HISTORY */}
            <section className="section" style={{ background: 'var(--bg2)' }}>
                <div className="container">
                    <h2 className="section-title">Version History</h2>
                    <p className="section-sub">From proof of concept to a fully adaptive, multi-platform release.</p>

                    <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
                        <div style={{ position: 'absolute', left: 17, top: 4, bottom: 4, width: 2, background: 'var(--border)', borderRadius: 2 }} />
                        {timeline.map((item, i) => (
                            <div key={item.ver} style={{ display: 'flex', gap: 24, marginBottom: 28, position: 'relative', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                                    background: i === timeline.length - 1 ? 'linear-gradient(135deg, var(--cyan2), var(--purple))' : 'var(--surface2)',
                                    border: '2px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '0.7rem', fontWeight: 700, color: i === timeline.length - 1 ? '#fff' : 'var(--text2)',
                                    zIndex: 1
                                }}>
                                    {item.ver.replace('v', '')}
                                </div>
                                <div style={{ paddingTop: 6 }}>
                                    <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 4, color: i === timeline.length - 1 ? 'var(--cyan)' : 'var(--text)' }}>
                                        {item.ver} {i === timeline.length - 1 && <span style={{ fontSize: '0.7rem', background: 'rgba(99,179,237,0.15)', color: 'var(--cyan)', border: '1px solid rgba(99,179,237,0.3)', borderRadius: 999, padding: '1px 8px', marginLeft: 6 }}>Current</span>}
                                    </div>
                                    <p style={{ color: 'var(--text2)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PERMISSIONS PER OS */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Permissions Required</h2>
                    <p className="section-sub">What EyeMouse needs access to — and why.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, maxWidth: 900, margin: '0 auto' }}>
                        <div className="feature-card">
                            <span className="feature-icon">🪟</span>
                            <div className="feature-title">Windows</div>
                            <div className="feature-desc">No special permissions needed beyond Camera access. Windows may ask for camera permission the first time — click Allow.</div>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🍎</span>
                            <div className="feature-title">macOS</div>
                            <div className="feature-desc">Two permissions required:<br /><strong style={{ color: 'var(--text)' }}>Accessibility</strong> (for pynput mouse control) and <strong style={{ color: 'var(--text)' }}>Camera</strong> access. Both found in System Settings → Privacy &amp; Security.</div>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon">🐧</span>
                            <div className="feature-title">Linux</div>
                            <div className="feature-desc"><strong style={{ color: 'var(--text)' }}>Camera:</strong> <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 5px', borderRadius: 3, fontSize: '0.78rem' }}>sudo usermod -aG video $USER</code><br /><br /><strong style={{ color: 'var(--text)' }}>Notifications:</strong> requires <code style={{ background: 'rgba(255,255,255,0.08)', padding: '1px 5px', borderRadius: 3, fontSize: '0.78rem' }}>libnotify-bin</code></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--bg2)', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">Try It Yourself</h2>
                    <p className="section-sub">Download EyeMouse and take control — with just your eyes.</p>
                    <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                        <Link to="/download" className="btn btn-primary btn-lg">⬇ Download Now</Link>
                        <Link to="/how-to-use" className="btn btn-secondary btn-lg">📖 Setup Guide</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
