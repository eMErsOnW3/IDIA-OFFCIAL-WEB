import { useState } from 'react';
import { Chrome, Monitor, Command, Download as DownloadIcon, Check, Package, FolderOpen, Settings2, ToggleRight, FolderInput, ShieldCheck } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { productConfig } from '../config';

const instructions = [
  [Package, 'Download the extension package.', 'Save the IDIA ZIP package to your computer.'],
  [FolderOpen, 'Extract the ZIP file.', 'Keep the extracted folder somewhere easy to find.'],
  [Settings2, 'Open Chrome Extensions.', <>In Chrome, enter <code>chrome://extensions</code> in the address bar.</>],
  [ToggleRight, 'Enable Developer Mode.', 'Turn on Developer mode in the top-right corner.'],
  [FolderInput, 'Click Load unpacked.', 'Choose the Load unpacked button on the extensions page.'],
  [ShieldCheck, 'Select the IDIA extension folder.', 'Select the extracted folder containing manifest.json.'],
];

export default function Download() {
  const [notice, setNotice] = useState(false);
  return <div className="page-enter"><section className="container page-intro"><div className="eyebrow">YOUR NEXT STEP, MORE PRIVATE.</div><h1>Download IDIA</h1><p>Add a privacy layer between your data and generative AI.</p></section><section className="container platforms" aria-label="Download platforms"><article className="platform-card chrome-card"><div className="platform-top"><span className="platform-icon"><Chrome size={30} /></span><span className="availability"><Check size={13} />Available</span></div><h2>Chrome Extension</h2><p>Privacy protection, right where <br />your AI conversations begin.</p><div className="version">Version {productConfig.extensionVersion}<span>·</span>Chrome browser</div>{productConfig.extensionDownloadUrl ? <Button href={productConfig.extensionDownloadUrl}><DownloadIcon size={17} />Download Extension</Button> : <Button onClick={() => setNotice(true)}><DownloadIcon size={17} />Download Extension</Button>}<p className="download-placeholder">V1 preview · Download link pending</p>{notice && <p className="action-notice" role="status">The extension package isn’t linked yet. The download will be available here once the release package is added.</p>}</article><article className="platform-card upcoming-platform"><span className="platform-icon"><Monitor size={29} /></span><h2>Windows</h2><p>A dedicated privacy layer <br />for your desktop workflow.</p><span className="coming-soon">Coming Soon</span></article><article className="platform-card upcoming-platform"><span className="platform-icon"><Command size={29} /></span><h2>macOS</h2><p>Thoughtful protection. <br />At home on your Mac.</p><span className="coming-soon">Coming Soon</span></article></section><section className="section container install-section"><Reveal><div className="section-heading"><div><div className="eyebrow">UP AND RUNNING</div><h2>How to Install IDIA</h2></div><p>A few simple steps to add the<br />unpacked extension to Chrome.</p></div><ol className="install-grid">{instructions.map(([Icon, title, copy], index) => <li key={title}><span className="install-number">0{index + 1}</span><div><Icon size={21} /><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className="installation-note"><Chrome size={19} /><p>Chrome Web Store distribution may be added later. For this first version, installation uses Chrome’s Developer Mode.</p></div></Reveal></section></div>;
}

