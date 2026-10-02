import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, RotateCcw, ScanLine, UserRound, Phone, Mail, Check, LockKeyhole } from 'lucide-react';
import Button from './Button';

const entities = [{ label: 'Name', value: 'Leon', token: '[NAME_1]', Icon: UserRound }, { label: 'Phone Number', value: '13812345678', token: '[PHONE_1]', Icon: Phone }, { label: 'Email Address', value: 'leon@example.com', token: '[EMAIL_1]', Icon: Mail }];

export default function PrivacyDemo() {
  const [phase, setPhase] = useState('ready');
  const timers = useRef([]);
  const protectedState = phase === 'protected';
  const running = phase === 'detecting' || phase === 'scanning';
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  useEffect(() => () => clearTimers(), []);
  function protect() {
    clearTimers();
    setPhase('detecting');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    timers.current.push(setTimeout(() => setPhase('scanning'), reducedMotion ? 80 : 550));
    timers.current.push(setTimeout(() => setPhase('protected'), reducedMotion ? 200 : 2050));
  }
  function reset() { clearTimers(); setPhase('ready'); }
  const value = (index) => <mark className={protectedState ? 'token' : 'sensitive'}>{protectedState ? entities[index].token : entities[index].value}</mark>;
  const status = { ready: 'Ready to review', detecting: 'Highlighting sensitive data…', scanning: 'Protecting your information…', protected: 'Protected' }[phase];
  return <div className={`privacy-demo phase-${phase}`} aria-label="Interactive IDIA privacy demonstration">
    <div className="demo-toolbar"><span><span className="mini-logo"><ShieldCheck size={17} /></span> IDIA privacy preview</span><span className="demo-live">Interactive demo</span></div>
    <div className="demo-content"><div className="prompt-heading"><span>YOUR AI PROMPT</span><span><span className={`status-dot ${protectedState ? 'protected-dot' : ''}`} />{protectedState ? 'Protected text' : 'Original text'}</span></div>
      <div className="prompt-editor" role="textbox" aria-label="Example AI prompt" aria-readonly="true" aria-multiline="true" tabIndex={0}>
        <p>Hi, my name is {value(0)}.<br />My phone number is {value(1)}.<br />My email is {value(2)}.<br /><span className="prompt-last-line">Please help me summarize this document.</span></p>
        {phase === 'scanning' && <div className="scan-line" aria-hidden="true" />}
      </div>
      <div className="detections-heading"><span>{protectedState ? <ShieldCheck size={16} /> : <ScanLine size={16} />}{protectedState ? '3 sensitive items protected' : '3 sensitive items detected'}</span><span>{protectedState ? 'Complete' : 'Review'}</span></div>
      <div className="entity-list">{entities.map(({ label, Icon }) => <div className="entity" key={label}><Icon size={14} /><span>{label}</span>{protectedState ? <Check size={14} /> : <span className="entity-count">1</span>}</div>)}</div>
      <div className="demo-actions"><Button onClick={protect} disabled={running || protectedState}><ShieldCheck size={17} />{protectedState ? 'Protected with IDIA' : running ? 'Protecting…' : 'Protect with IDIA'}</Button><button className="reset-button" onClick={reset}><RotateCcw size={15} />Reset</button></div>
      <div className="demo-status" role="status" aria-live="polite"><LockKeyhole size={13} /><span>{status}</span></div>
    </div>
    <div className="demo-footnote">Sample text only. A frontend simulation, processed in this page.</div>
  </div>;
}
