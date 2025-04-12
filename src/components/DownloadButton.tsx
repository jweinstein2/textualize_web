import { useEffect, useState } from 'react'
import './DownloadButton.css'
import appleLogo from '../assets/apple-logo.svg'

enum Platform {
    Arm64 = 'Apple Silicon',
    x64 = 'Intel Chip',
    Mobile = 'mobile',
    Other = 'other'
}

const downloadUrls: Record<Platform.Arm64 | Platform.x64, string> = {
  [Platform.Arm64]: 'https://github.com/jweinstein2/textualize/releases/latest/download/Textualize-mac-arm64.dmg',
  [Platform.x64]: 'https://github.com/jweinstein2/textualize/releases/latest/download/Textualize-mac-x64.dmg'
}

function isValidDownloadPlatform(platform: Platform): platform is Platform.Arm64 | Platform.x64 {
  return platform === Platform.Arm64 || platform === Platform.x64;
}

async function checkArchitecture(): Promise<Platform> {
    const userAgent = navigator.userAgent || navigator.vendor
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
    if (isMobile) {
        return Platform.Mobile
    }

    const ua = navigator.userAgent.toLowerCase()
    if ((navigator as any).userAgentData?.getHighEntropyValues) {
        try {
            const uaData = await (navigator as any).userAgentData.getHighEntropyValues([
                'architecture',
                'platform'
            ])
            if (uaData.platform === 'macOS') {
                return uaData.architecture === 'arm' ? Platform.Arm64 : Platform.x64 
            }
        } catch {
            // Fallback below will handle it
        }
    }

    const isMac = ua.includes('macintosh')
    const isArm = ua.includes('arm') || ua.includes('aarch64') || ua.includes('applewebkit') 
        && ua.includes('version/') && ua.includes('safari') && ua.includes('mac os x') && !ua.includes('intel')

    if (isMac) {
        return isArm ? Platform.Arm64 : Platform.x64 
    }
    return Platform.Other
}

interface DownloadButtonProps {
    showAllDownload?: boolean
}

export default function DownloadButton({ showAllDownload = true }: DownloadButtonProps) {
  const [architecture, setArchitecture] = useState<Platform | undefined>(undefined)
  const [siliconDownloadUrl, setSiliconDownloadUrl ] = useState<string>()
  const [intelDownloadUrl, setIntelDownloadUrl] = useState<string>()

  useEffect(() => {
    checkArchitecture().then(setArchitecture)
  }, [])

  useEffect(() => {
    // Use GitHub API to get the latest release
    fetch('https://api.github.com/repos/jweinstein2/textualize/releases/latest')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch release information');
        }
        return response.json();
      })
      .then(data => {
        // Find the DMG file in the assets
        const armDmgAsset = data.assets.find((asset: any) => 
          asset.name.endsWith('.dmg') && (asset.name.includes('arm64')
        ));
        setSiliconDownloadUrl(armDmgAsset.browser_download_url)
        const x64DmgAsset = data.assets.find((asset: any) => 
          asset.name.endsWith('.dmg') && (asset.name.includes('x64')
        ));
        setIntelDownloadUrl(x64DmgAsset.browser_download_url)
      })

      .catch(error => {
        console.error('Error fetching release information:', error);
        // TODO: Fallback to direct URLs if API fails

      });
  }, []);

  if (architecture === Platform.Mobile || architecture === Platform.Other) {
    return (
      <div className="message">
        <p>Sorry, we currently only support MacOS due to security permissions.</p>
        <button disabled>Download</button>
      </div>
    )
  }

  const currentHref = architecture === Platform.Arm64 ? siliconDownloadUrl : intelDownloadUrl
  return (
       <div className="button-container">
           <a href={currentHref} className="download-button">
               <img src={appleLogo} alt="apple logo" className="platform-icon" />
               Download for Mac - {architecture}
           </a>
            {showAllDownload ? (
                <a href={"https://github.com/jweinstein2/textualize/releases/latest"}>
                    [See all download options]
                </a>) : <></>}
       </div>
  )
}
