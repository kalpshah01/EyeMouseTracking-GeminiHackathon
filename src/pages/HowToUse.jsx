import { useState } from 'react'

const trackingShortcuts = [
    { key: 'SPACE', action: 'Manual left click' },
    { key: 'Z', action: 'Manual right click' },
    { key: 'X', action: 'Manual double click' },
    { key: '+ / =', action: 'Increase cursor sensitivity' },
    { key: '-', action: 'Decrease cursor sensitivity' },
    { key: 'C', action: 'Toggle blink gestures ON / OFF' },
    { key: 'R', action: 'Recalibrate (keeps ML model & eye choice)' },
    { key: 'A', action: 'Re-run auto eye assessment' },
    { key: 'M', action: 'Toggle live ML stats overlay' },
    { key: 'P', action: 'Go to profile manager' },
    { key: 'T', action: 'Reopen tutorial' },
    { key: 'Q', action: 'Quit and save' },
]

const profileShortcuts = [
    { key: 'UP / DOWN', action: 'Navigate profiles' },
    { key: 'ENTER', action: 'Load selected profile' },
    { key: 'R', action: 'Recalibrate selected profile' },
    { key: 'L', action: 'Reset ML model for selected profile' },
    { key: 'D', action: 'Delete selected profile (with confirmation)' },
    { key: 'N', action: 'Register new user' },
    { key: 'T', action: 'Open tutorial' },
]

const gestures = [
    { gesture: 'Short blink', timing: '< 0.30 s', action: 'Left Click' },
    { gesture: 'Double blink', timing: 'Two short blinks within 0.50 s', action: 'Double Click' },
    { gesture: 'Medium blink', timing: '0.30 – 0.70 s', action: 'Right Click' },
    { gesture: 'Long blink', timing: '> 0.70 s', action: 'Toggle Scroll Mode' },
]

const troubleshootItems = [
    {
        q: "module 'cv2' has no attribute 'VideoCapture'",
        a: "You have conflicting OpenCV installs. Fix by uninstalling all and reinstalling:",
        code: `pip uninstall opencv-python opencv-python-headless opencv-contrib-python -y\npip install opencv-python`
    },
    {
        q: "AttributeError: module 'mediapipe' has no attribute 'solutions'",
        a: "You have MediaPipe 0.10.14+ which removed mp.solutions. v5.4 already uses the new Tasks API — make sure you're running the correct file (claudadv_v5.py).",
        code: null
    },
    {
        q: "Camera not detected / black screen",
        a: "Make sure no other app (Teams, Zoom, OBS) has the camera open. Try changing the camera index:",
        code: `# Edit claudadv_v5.py — change:\ncv2.VideoCapture(0)\n# to:\ncv2.VideoCapture(1)`
    },
    {
        q: "Cursor snaps to corners",
        a: "Press − several times during tracking to lower sensitivity. The default is 1.2. Try 0.8 or 0.9. Then recalibrate with R.",
        code: null
    },
    {
        q: "Blink gestures not triggering",
        a: "Press M to see live ML stats. Check Blink thresh — should be between 0.15 and 0.25. Press C to confirm gestures are ON.",
        code: null
    },
    {
        q: "Scroll not working or too fast/slow",
        a: "You must be in scroll mode first (long blink to enter). The ↕ SCROLL MODE label appears in the top-left of the webcam window when active.",
        code: null
    },
    {
        q: "System notifications not appearing (Windows)",
        a: "Check Windows notification settings: Settings → System → Notifications → make sure PowerShell or Windows notifications are not blocked. Optionally install BurntToast:",
        code: `Install-Module BurntToast  # Run in PowerShell as admin`
    },
    {
        q: "face_landmarker.task download fails",
        a: "Download the file manually and place it in the same folder as claudadv_v5.py:",
        code: `# Download from:\nhttps://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`
    },
]

function Accordion({ items }) {
    const [open, setOpen] = useState(null)
    return (
        <div>
            {items.map((item, i) => (
                <div key={i} className="accordion-item">
                    <div className="accordion-header" onClick={() => setOpen(open === i ? null : i)}>
                        <span>🔧 {item.q}</span>
                        <span className={`accordion-icon${open === i ? ' open' : ''}`}>▼</span>
                    </div>
                    {open === i && (
                        <div className="accordion-body">
                            <p>{item.a}</p>
                            {item.code && (
                                <div className="code-block">
                                    <div className="code-block-header">
                                        <div className="code-dots">
                                            <div className="code-dot code-dot-red" />
                                            <div className="code-dot code-dot-yellow" />
                                            <div className="code-dot code-dot-green" />
                                        </div>
                                        <span className="code-block-title">Fix</span>
                                    </div>
                                    <pre>{item.code}</pre>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

function CodeBlock({ title, code }) {
    return (
        <div className="code-block">
            <div className="code-block-header">
                <div className="code-dots">
                    <div className="code-dot code-dot-red" />
                    <div className="code-dot code-dot-yellow" />
                    <div className="code-dot code-dot-green" />
                </div>
                <span className="code-block-title">{title}</span>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: code }} />
        </div>
    )
}

export default function HowToUse() {
    const [os, setOs] = useState('windows')

    const windowsCode = `<span class="comment"># Step 1 — Create virtual environment</span>
<span class="cmd">cd D:\\eyemouse\\eyemouse_claude</span>
<span class="cmd">python -m venv .venv</span>
<span class="cmd">.venv\\Scripts\\activate</span>

<span class="comment"># Step 2 — Install libraries (exact order matters)</span>
<span class="cmd">pip install --upgrade pip</span>
<span class="cmd">pip install numpy</span>
<span class="cmd">pip install opencv-python</span>
<span class="cmd">pip install mediapipe</span>
<span class="cmd">pip install pynput</span>

<span class="comment"># Step 3 — Verify</span>
<span class="cmd">python -c "import cv2, mediapipe, pynput, numpy; print('All OK —', cv2.__version__)"</span>

<span class="comment"># Step 4 — Run</span>
<span class="cmd">python claudadv_v5.py</span>`

    const macosCode = `<span class="comment"># Step 1 — Create virtual environment</span>
<span class="cmd">cd ~/eyemouse_claude</span>
<span class="cmd">python3.10 -m venv .venv</span>
<span class="cmd">source .venv/bin/activate</span>

<span class="comment"># Step 2 — Install libraries</span>
<span class="cmd">pip install --upgrade pip</span>
<span class="cmd">pip install numpy opencv-python mediapipe pynput</span>

<span class="comment"># Step 3 — Run</span>
<span class="cmd">python claudadv_v5.py</span>

<span class="comment"># ⚠️ Permissions required:</span>
<span class="comment"># System Settings → Privacy & Security → Accessibility → add Terminal</span>
<span class="comment"># System Settings → Privacy & Security → Camera → allow Terminal</span>`

    const linuxCode = `<span class="comment"># Step 1 — Install system packages</span>
<span class="cmd">sudo apt update</span>
<span class="cmd">sudo apt install python3.10 python3.10-venv python3-tk libnotify-bin -y</span>

<span class="comment"># Step 2 — Create virtual environment</span>
<span class="cmd">cd ~/eyemouse_claude</span>
<span class="cmd">python3.10 -m venv .venv</span>
<span class="cmd">source .venv/bin/activate</span>

<span class="comment"># Step 3 — Install libraries</span>
<span class="cmd">pip install --upgrade pip</span>
<span class="cmd">pip install numpy opencv-python mediapipe pynput</span>

<span class="comment"># Step 4 — Camera permission</span>
<span class="cmd">sudo usermod -aG video $USER</span>
<span class="comment"># Log out and back in, then:</span>
<span class="cmd">python claudadv_v5.py</span>`

    const codeMap = { windows: windowsCode, macos: macosCode, linux: linuxCode }

    return (
        <>
            <div className="page-header">
                <div className="page-header-bg" />
                <div className="container">
                    <h1>📖 How to <span className="text-gradient">Use EyeMouse</span></h1>
                    <p>Full setup guide for all operating systems, keyboard shortcuts, blink gestures, and troubleshooting.</p>
                </div>
            </div>

            {/* FIRST LAUNCH WALKTHROUGH */}
            <section className="section" id="setup">
                <div className="container">
                    <h2 className="section-title">First Launch Walkthrough</h2>
                    <p className="section-sub">What happens the very first time you start EyeMouse.</p>

                    <div style={{ maxWidth: 720, margin: '0 auto' }}>
                        {[
                            { n: 1, title: 'Tutorial', desc: 'A 6-page tutorial opens automatically. Read each page and press SPACE to advance. Press ESC to skip.' },
                            { n: 2, title: 'Face Registration', desc: 'Type your name → press ENTER → hold still for 3 seconds while the camera captures your face.' },
                            { n: 3, title: 'Auto Eye Assessment', desc: 'Keep both eyes open for ~2 seconds. The system automatically picks your better eye for tracking.' },
                            { n: 4, title: 'Calibration', desc: 'A cyan dot moves to 9 positions on screen. Follow it only with your eyes — keep your head still.' },
                            { n: 5, title: 'Tracking Begins', desc: 'Tracking starts automatically after calibration. Your iris controls the mouse cursor in real time.' },
                        ].map(step => (
                            <div key={step.n} className="setup-step">
                                <div className="step-num">{step.n}</div>
                                <div className="step-body">
                                    <div className="step-title">{step.title}</div>
                                    <p style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}

                        <div className="alert alert-info mt-16">
                            <span className="alert-icon">ℹ️</span>
                            <span><strong>Returning user?</strong> The profile select screen will appear instead. Use UP/DOWN to pick a profile, then press ENTER to load.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* OS SETUP */}
            <section className="section" style={{ background: 'var(--bg2)' }} id="install">
                <div className="container">
                    <h2 className="section-title">Install from Source</h2>
                    <p className="section-sub">Pick your operating system for step-by-step install instructions.</p>

                    <div className="os-tabs">
                        <button className={`os-tab${os === 'windows' ? ' active' : ''}`} onClick={() => setOs('windows')}>
                            <span className="os-icon">🪟</span> Windows
                        </button>
                        <button className={`os-tab${os === 'macos' ? ' active' : ''}`} id="macos" onClick={() => setOs('macos')}>
                            <span className="os-icon">🍎</span> macOS
                        </button>
                        <button className={`os-tab${os === 'linux' ? ' active' : ''}`} id="linux" onClick={() => setOs('linux')}>
                            <span className="os-icon">🐧</span> Linux
                        </button>
                    </div>

                    <div style={{ maxWidth: 720, margin: '0 auto' }}>
                        <div className="alert alert-warning">
                            <span className="alert-icon">⚠️</span>
                            <span><strong>Onwards Python 3.9, 3.10, or 3.11.</strong> Use Python 3.10 for best compatibility. Download: <a href="https://www.python.org/downloads/release/python-3100/" target="_blank" rel="noreferrer" style={{ color: 'var(--yellow)' }}>python.org</a></span>
                        </div>

                        <CodeBlock
                            title={os === 'windows' ? 'Windows (Command Prompt)' : os === 'macos' ? 'macOS (Terminal)' : 'Linux (Ubuntu/Debian)'}
                            code={codeMap[os]}
                        />

                        {os === 'macos' && (
                            <div className="alert alert-warning">
                                <span className="alert-icon">⚠️</span>
                                <span><strong>macOS Permissions Required:</strong> Accessibility (for pynput) and Camera access. Go to System Settings → Privacy &amp; Security to enable both.</span>
                            </div>
                        )}
                        {os === 'linux' && (
                            <div className="alert alert-info">
                                <span className="alert-icon">ℹ️</span>
                                <span><strong>Wayland users:</strong> pynput may need <code style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 5px', borderRadius: 3 }}>XDG_SESSION_TYPE=x11</code> set, or run under XWayland.</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* KEYBOARD SHORTCUTS */}
            <section className="section" id="shortcuts">
                <div className="container">
                    <h2 className="section-title">Keyboard Shortcuts</h2>
                    <p className="section-sub">All keyboard shortcuts available during tracking and in the profile manager.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 900, margin: '0 auto' }}>
                        <div>
                            <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '1rem', color: 'var(--cyan)' }}>During Tracking</h3>
                            <div className="table-wrap">
                                <table>
                                    <thead><tr><th>Key</th><th>Action</th></tr></thead>
                                    <tbody>
                                        {trackingShortcuts.map(s => (
                                            <tr key={s.key}>
                                                <td><span className="kbd">{s.key}</span></td>
                                                <td>{s.action}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div>
                            <h3 style={{ fontWeight: 700, marginBottom: 16, fontSize: '1rem', color: 'var(--purple)' }}>Profile Manager Screen</h3>
                            <div className="table-wrap">
                                <table>
                                    <thead><tr><th>Key</th><th>Action</th></tr></thead>
                                    <tbody>
                                        {profileShortcuts.map(s => (
                                            <tr key={s.key}>
                                                <td><span className="kbd">{s.key}</span></td>
                                                <td>{s.action}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLINK GESTURES */}
            <section className="section" id="gestures" style={{ background: 'var(--bg2)' }}>
                <div className="container">
                    <h2 className="section-title">Blink Gesture Reference</h2>
                    <p className="section-sub">
                        Gestures are performed with your <strong style={{ color: 'var(--text)' }}>non-tracking eye</strong> (the click eye).
                        After ~15 blinks, the Adaptive ML model personalises all timing cutoffs to your natural blink speed.
                    </p>

                    <div className="table-wrap" style={{ maxWidth: 700, margin: '0 auto 24px' }}>
                        <table>
                            <thead>
                                <tr><th>Gesture</th><th>Default Timing</th><th>Action</th></tr>
                            </thead>
                            <tbody>
                                {gestures.map(g => (
                                    <tr key={g.gesture}>
                                        <td style={{ fontWeight: 600 }}>{g.gesture}</td>
                                        <td style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem', color: 'var(--cyan)' }}>{g.timing}</td>
                                        <td>{g.action}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ maxWidth: 680, margin: '0 auto' }}>
                        <h3 style={{ fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>Scroll Mode</h3>
                        <div className="alert alert-success">
                            <span className="alert-icon">↕️</span>
                            <span>Enter scroll mode with a <strong>long blink (&gt; 0.70 s)</strong>. The ↕ SCROLL MODE label appears on screen. Long blink again to exit.</span>
                        </div>
                        <div className="table-wrap">
                            <table>
                                <thead><tr><th>Eye Direction</th><th>Result</th></tr></thead>
                                <tbody>
                                    <tr><td>Look <strong>up</strong></td><td>Scroll up (slow near centre, faster toward top)</td></tr>
                                    <tr><td>Look <strong>down</strong></td><td>Scroll down (quadratic speed curve)</td></tr>
                                    <tr><td>Long blink again</td><td>Exit scroll mode</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROFILES */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Profiles & Multi-User</h2>
                    <p className="section-sub">Each profile is stored as a separate .pkl file. Profiles never share data.</p>

                    <div className="table-wrap" style={{ maxWidth: 750, margin: '0 auto 24px' }}>
                        <table>
                            <thead>
                                <tr><th>Action</th><th>What is Reset</th><th>What is Kept</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Recalibrate (R)</strong></td>
                                    <td>Iris-to-screen mapping only</td>
                                    <td>Eye choice, ML model, sensitivity</td>
                                </tr>
                                <tr>
                                    <td><strong>Reset ML (L)</strong></td>
                                    <td>ML model (blink history, thresholds)</td>
                                    <td>Calibration, eye choice, sensitivity</td>
                                </tr>
                                <tr>
                                    <td><strong>Delete (D)</strong></td>
                                    <td>Everything (file permanently deleted)</td>
                                    <td>—</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="alert alert-info" style={{ maxWidth: 700, margin: '0 auto' }}>
                        <span className="alert-icon">💾</span>
                        <span>Profiles are stored in <code style={{ background: 'rgba(255,255,255,0.1)', padding: '1px 6px', borderRadius: 3 }}>eye_tracking_profiles/</code> in the same directory as the script.</span>
                    </div>
                </div>
            </section>

            {/* TROUBLESHOOTING */}
            <section className="section" id="troubleshoot" style={{ background: 'var(--bg2)' }}>
                <div className="container">
                    <h2 className="section-title">Troubleshooting</h2>
                    <p className="section-sub">Common issues and how to fix them — click a problem to expand the solution.</p>

                    <div style={{ maxWidth: 800, margin: '0 auto' }}>
                        <Accordion items={troubleshootItems} />
                    </div>
                </div>
            </section>
        </>
    )
}
