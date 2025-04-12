import './Privacy.css'

export default function Privacy() {
    return (
        <div className="privacy-container">
            <div className="privacy-content">
                <div className="privacy-header">
                    <h2>Private By Design</h2>
                    <div className="lock-icon-container">
                        <svg 
                            className="lock-icon" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" 
                                stroke="#4ade80" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                            <path 
                                d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" 
                                stroke="#4ade80" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <p className="privacy-description">
                    We take your privacy seriously. All analysis happens locally 
                    on your Mac - your messages never leave your device.
                </p>
                <ul className="privacy-list">
                    <li>
                        <span className="check-icon">✓</span>
                        All our code is open source. Check it out on Github!
                    </li>
                    <li>
                        <span className="check-icon">✓</span>
                        No third-party access for data
                    </li>
                    <li>
                        <span className="check-icon">✓</span>
                        Data is never stored on our servers (we don't have any)
                    </li>
                </ul>
            </div>
        </div>
    )
} 