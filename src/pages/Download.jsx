import { Link } from 'react-router-dom'

export default function Download() {
    const handleWindowsDownload = () => {
        const link = document.createElement('a')
       link.href = 'https://github.com/kalpshah01/EyeMouseTracking-GeminiHackathon/releases/download/v1.0/EyeMouse.exe'
        link.download = 'EyeMouse.exe'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleLinuxDownload = () => {
        const link = document.createElement('a')
      link.href = 'https://github.com/kalpshah01/EyeMouseTracking-GeminiHackathon/releases/download/v1.0/EyeMouse'
        link.download = 'EyeMouse'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <div className="page-header">
                <div className="page-header-bg" />
                <div className="container">
                    <h1>⬇️ Download <span className="text-gradient">EyeMouse</span></h1>
                    <p>Choose your operating system below. Windows and Linux builds are available now — macOS build is coming soon.</p>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    {/* DOWNLOAD CARDS */}
                    <div className="download-cards">
                        {/* Windows */}
                        <div className="download-card featured">
                            <div className="download-badge">✅ Available Now</div>
                            <div className="download-icon">🪟</div>
                            <div className="download-os-name">Windows</div>
                            <div className="download-version">EyeTrackingMouse v5.4.0</div>
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleWindowsDownload}>
                                <span>⬇</span> Download .exe
                            </button>
                            <div className="download-size">~78 MB · Contains .exe + model file</div>
                        </div>

                        {/* macOS */}
                        <div className="download-card coming-soon">
                            <div className="download-icon">🍎</div>
                            <div className="download-os-name">macOS</div>
                            <div className="download-version">v5.4.0 — Build in progress</div>
                            <div className="coming-soon-badge">🔧 In progress</div>
                            <div className="download-size mt-16">
                                Meanwhile, install from source:<br />
                                <Link to="/how-to-use#macos" style={{ color: 'var(--cyan)', textDecoration: 'none', fontSize: '0.82rem' }}>
                                    View macOS setup guide →
                                </Link>
                            </div>
                        </div>

                        {/* Linux */}
                        <div className="download-card featured">
                            <div className="download-badge">✅ Available Now</div>
                            <div className="download-icon">🐧</div>
                            <div className="download-os-name">Linux</div>
                            <div className="download-version">EyeTrackingMouse v5.4.0</div>
                            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleLinuxDownload}>
                                <span>⬇</span> Download
                            </button>
                            <div className="download-size">~78 MB · Contains executable + model file</div>
                        </div>
                    </div>

                    <div className="divider" />

                    {/* WHAT'S IN THE ZIP */}
                    <h2 className="section-title" style={{ marginBottom: 12 }}>What's Inside the Download</h2>
                    <p className="section-sub" style={{ marginBottom: 36 }}>The Windows .zip includes everything you need to run the app — no Python install required.</p>

                    <div className="table-wrap" style={{ maxWidth: 700, margin: '0 auto 40px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>File / Folder</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span className="kbd">EyeTrackingMouse.exe</span></td>
                                    <td>Main executable — double-click to launch</td>
                                </tr>
                                <tr>
                                    <td><span className="kbd">face_landmarker.task</span></td>
                                    <td>MediaPipe face landmark model (~29 MB)</td>
                                </tr>
                                <tr>
                                    <td><span className="kbd">eye_tracking_profiles/</span></td>
                                    <td>Auto-created on first run — stores user profiles</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* INSTALL FROM SOURCE */}
                    <div style={{ maxWidth: 760, margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 20, textAlign: 'center' }}>
                            🐍 Install from Source (Python)
                        </h3>
                        <p style={{ color: 'var(--text2)', marginBottom: 24, textAlign: 'center' }}>
                            For macOS, Linux, or if you prefer running the Python script directly.
                        </p>

                        <div className="alert alert-warning">
                            <span className="alert-icon">⚠️</span>
                            <span><strong>Onwards Python 3.9, 3.10, or 3.11.</strong> Use Python 3.10 for best compatibility with MediaPipe.</span>
                        </div>

                        <div className="code-block">
                            <div className="code-block-header">
                                <div className="code-dots">
                                    <div className="code-dot code-dot-red" />
                                    <div className="code-dot code-dot-yellow" />
                                    <div className="code-dot code-dot-green" />
                                </div>
                                <span className="code-block-title">Install Dependencies</span>
                            </div>
                            <pre>
                                <span className="comment"># 1. Create virtual environment</span>{'\n'}
                                <span className="cmd">python -m venv .venv</span>{'\n'}
                                <span className="comment"># Windows activate</span>{'\n'}
                                <span className="cmd">.venv\Scripts\activate</span>{'\n'}
                                <span className="comment"># macOS / Linux activate</span>{'\n'}
                                <span className="cmd">source .venv/bin/activate</span>{'\n\n'}
                                <span className="comment"># 2. Install libraries (order matters)</span>{'\n'}
                                <span className="cmd">pip install --upgrade pip</span>{'\n'}
                                <span className="cmd">pip install numpy</span>{'\n'}
                                <span className="cmd">pip install opencv-python</span>{'\n'}
                                <span className="cmd">pip install mediapipe</span>{'\n'}
                                <span className="cmd">pip install pynput</span>{'\n\n'}
                                <span className="comment"># 3. Run</span>{'\n'}
                                <span className="cmd">python claudadv_v5.py</span>
                            </pre>
                        </div>

                        <div className="alert alert-info" style={{ marginTop: 8 }}>
                            <span className="alert-icon">ℹ️</span>
                            <span>On the very first run, the script downloads <strong>face_landmarker.task</strong> (~29 MB) automatically. Only happens once.</span>
                        </div>

                        <div className="text-center mt-24">
                            <Link to="/how-to-use" className="btn btn-secondary">
                                📖 Full Setup Guide by OS →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
