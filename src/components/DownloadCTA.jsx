import { Download, ShieldCheck } from 'lucide-react';
import Button from './Button';
export default function DownloadCTA() {
  return <section className="download-cta container"><div className="cta-icon"><ShieldCheck size={28} /></div><div><div className="eyebrow">PRIVACY BEFORE THE PROMPT.</div><h2>Use AI without giving up<br />control of your data.</h2></div><div className="cta-action"><Button to="/download"><Download size={17} />Download IDIA</Button><span>Start with the Chrome Extension</span></div></section>;
}
