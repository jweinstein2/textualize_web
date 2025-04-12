import DownloadButton from './DownloadButton'
import "./Hero.css"

export default function Hero() {
    return (
        <div className="hero">
            <h1>
                What are your messages <span className="emphasis">really</span> saying? 
            </h1>
            <DownloadButton />
        </div>)
}
