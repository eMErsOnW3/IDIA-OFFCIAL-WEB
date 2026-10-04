import { ShieldCheck, RotateCcw, ScanLine, Check, LockKeyhole } from 'lucide-react';
import Button from './Button';
import SensitiveValue from './privacy-demo/SensitiveValue';
import useProtectionDemo from '../hooks/useProtectionDemo';
import { sampleEntities, heroRequest, heroContext } from '../data/sampleContent';

export default function PrivacyDemo() {
  const { phase, protect, reset, running } = useProtectionDemo();
  const protectedState = phase === 'protected';
  const status = { ready: 'Ready to review', detecting: 'Highlighting sensitive data…', scanning: 'Protecting private details…', protected: 'Protected' }[phase];
  return <div className={`privacy-demo hero-privacy-demo phase-${phase}`} aria-label="Interactive IDIA privacy demonstration">
    <div className="demo-toolbar"><span><span className="mini-logo"><ShieldCheck size={17} /></span>IDIA privacy preview</span><span className="demo-live">Interactive demo</span></div>
    <div className="demo-content">
      <div className="prompt-heading"><span>YOUR AI REQUEST</span><span><span className={`status-dot ${protectedState ? 'protected-dot' : ''}`} />{protectedState ? 'Protected content' : 'Original content'}</span></div>
      <div className="prompt-editor hero-request" role="textbox" aria-label="Sample client onboarding prompt" aria-readonly="true" aria-multiline="true" tabIndex={0}>
        <p>{heroRequest}</p>
        <dl>{sampleEntities.map(entity => <div key={entity.id}><dt>{entity.id === 'address' ? 'Address' : entity.id === 'apiKey' ? 'Staging API key' : entity.field}:</dt><dd><SensitiveValue entity={entity} protectedState={protectedState} /></dd></div>)}</dl>
        <p className="preserved-context">{heroContext}</p>
        {phase === 'scanning' && <div className="scan-line" aria-hidden="true" />}
      </div>
      <div className="detections-heading"><span>{protectedState ? <ShieldCheck size={16} /> : <ScanLine size={16} />}5 sensitive items {protectedState ? 'protected' : 'detected'}</span><span>{protectedState ? 'Complete' : 'Review'}</span></div>
      <div className="entity-list">{sampleEntities.map(({ label, Icon }) => <div className="entity" key={label}><Icon size={14} /><span>{label}</span>{protectedState ? <Check size={14} /> : <span className="entity-count">1</span>}</div>)}</div>
      <div className="demo-actions"><Button onClick={protect} disabled={running || protectedState}><ShieldCheck size={17} />{protectedState ? 'Protected with IDIA' : running ? 'Protecting…' : 'Protect with IDIA'}</Button><button className="reset-button" onClick={reset}><RotateCcw size={15} />Reset</button></div>
      <div className="demo-status" role="status"><LockKeyhole size={13} /><span>{status}</span></div>
      <p className="demo-principle">Keep the context. Protect the private details.</p>
    </div>
    <div className="demo-footnote">Fictional sample data and demo tokens. Frontend simulation only.</div>
  </div>;
}
