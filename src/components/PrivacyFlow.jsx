import { UserRound, FileText, ShieldCheck, FileCheck2, Sparkles, ArrowDown } from 'lucide-react';
export default function PrivacyFlow() {
  return <div className="privacy-flow" aria-label="User to original content, through IDIA privacy layer to protected content, then AI platform">
    <div className="flow-end"><UserRound size={17} /><span>User</span></div><span className="flow-connector" aria-hidden="true"><ArrowDown size={17} /></span>
    <div className="flow-content"><div><FileText size={17} /><span>Original Content</span></div><span className="flow-sample"><mark className="sensitive">leon@example.com</mark></span></div>
    <span className="flow-connector flow-connector--animated" aria-hidden="true"><ArrowDown size={17} /></span>
    <div className="flow-layer"><div className="flow-shield"><ShieldCheck size={26} /></div><div><strong>IDIA Privacy Layer</strong><span>Detect · Review · Protect</span></div><span className="flow-layer-status"><span />IN YOUR CONTROL</span></div>
    <span className="flow-connector flow-connector--animated protected-path" aria-hidden="true"><ArrowDown size={17} /></span>
    <div className="flow-content"><div><FileCheck2 size={17} /><span>Protected Content</span></div><span className="flow-sample"><mark className="token">[IDIA_EMAIL_…]</mark></span></div>
    <span className="flow-connector" aria-hidden="true"><ArrowDown size={17} /></span><div className="flow-end"><Sparkles size={17} /><span>AI Platform</span></div>
    <span className="flow-connector" aria-hidden="true"><ArrowDown size={17} /></span><div className="flow-end"><ShieldCheck size={17} /><span>Returned tokens → Decode locally</span></div>
  </div>;
}
