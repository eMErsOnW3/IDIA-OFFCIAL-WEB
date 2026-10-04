import { useId, useState } from 'react';
import { FileText, ShieldCheck, RotateCcw, Paperclip, Check, Eye } from 'lucide-react';
import Button from './Button';
import SampleFilePreview from './SampleFilePreview';
import ReviewSensitiveData from './ReviewSensitiveData';
import useProtectionDemo from '../hooks/useProtectionDemo';
import { allSampleIds, sampleFileName } from '../data/sampleContent';

export default function SampleFileTrial() {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [attached, setAttached] = useState(false);
  const [selected, setSelected] = useState([...allSampleIds]);
  const [protectedIds, setProtectedIds] = useState([]);
  const { phase, protect, reset, running } = useProtectionDemo();
  const previewId = useId();
  const complete = phase === 'protected';

  function resetTrial() {
    reset();
    setPreviewOpen(false);
    setAttached(false);
    setSelected([...allSampleIds]);
    setProtectedIds([]);
  }
  function toggle(id) {
    setSelected(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  }
  function protectSelected() {
    if (!selected.length || running || complete) return;
    setProtectedIds([...selected]);
    protect();
  }

  return <section className="section container file-trial" id="try-idia" aria-labelledby="trial-title">
    <div className="section-heading"><div><div className="eyebrow">TRY IDIA</div><h2 id="trial-title">See what IDIA protects<br />before your file reaches AI.</h2></div><p>Preview a fictional handoff. Choose what stays private.<br />Keep the context that makes AI useful.</p></div>
    <ol className="trial-steps" aria-label="Trial workflow"><li className={previewOpen ? 'is-current' : ''}>01 <span>Preview</span></li><li className={attached ? 'is-current' : ''}>02 <span>Attach & review</span></li><li className={complete ? 'is-current' : ''}>03 <span>Protect</span></li></ol>
    <div className="trial-grid">
      <div className="trial-source">
        <div className="trial-source-heading"><FileText size={23} /><div><h3>{sampleFileName}</h3><p>Built-in sample · No upload needed</p></div></div>
        <div className="trial-source-actions"><Button variant="secondary" aria-expanded={previewOpen} aria-controls={previewId} onClick={() => setPreviewOpen(!previewOpen)}><Eye size={16} />{previewOpen ? 'Hide Sample File' : 'Preview Sample File'}</Button><Button onClick={() => setAttached(true)} disabled={!previewOpen || attached}><Paperclip size={16} />{attached ? 'Added to Chat' : 'Add to Chat'}</Button></div>
        {previewOpen ? <SampleFilePreview id={previewId} /> : <div className="sample-preview-placeholder" id={previewId}><FileText size={38} /><p>A client handoff, with the details<br />you might want to keep private.</p><span>Open the sample to begin.</span></div>}
      </div>
      <div className={`trial-chat phase-${phase}`} aria-label="Sample file AI chat">
        <div className="trial-chat-heading"><span className="mini-logo"><ShieldCheck size={18} /></span><strong>Your AI workspace</strong><span>Demo</span></div>
        <div className="trial-chat-body">
          <div className="trial-composer" role="group" aria-label="Sample chat composer">
            <p>Summarize this client handoff and identify the key action items.</p>
            {attached ? <div className="trial-attachment"><FileText size={19} /><span><strong>{sampleFileName}</strong><small>{complete ? 'Protected context ready' : 'Attached locally · Awaiting review'}</small></span>{complete && <Check size={16} />}</div> : <p className="trial-empty"><Paperclip size={15} />Add the sample file to review its private details.</p>}
          </div>
          {!attached && <div className="trial-empty-review"><ShieldCheck size={30} /><p>Your review happens here,<br />before anything is shared.</p></div>}
          {attached && !complete && <>
            <ReviewSensitiveData selected={selected} onToggle={toggle} disabled={running} />
            <div className="trial-protect-area">
              <Button onClick={protectSelected} disabled={running || !selected.length}><ShieldCheck size={17} />{running ? 'Protecting…' : 'Protect Selected'}</Button>
              <span>{selected.length} of 5 selected</span>
              {phase === 'scanning' && <div className="scan-line" aria-hidden="true" />}
            </div>
            {!selected.length && <p className="trial-inline-note">Select at least one item to protect.</p>}
          </>}
          {complete && <div className="trial-complete"><ShieldCheck size={27} /><h3>Protected context ready for AI</h3><p>{protectedIds.length} selected {protectedIds.length === 1 ? 'item tokenized' : 'items tokenized'}. {5 - protectedIds.length} left unchanged.</p><p>Compare both versions below before sharing.</p></div>}
          <div className="trial-status" role="status">{complete ? 'Protected. Nothing has been sent to AI.' : running ? 'Protecting selected details locally…' : attached ? 'Review the five detected items and choose what to protect.' : 'Preview the sample, then add it to this chat.'}</div>
        </div>
      </div>
    </div>
    {complete && <div className="trial-comparison" aria-label="Before and protected file context"><div><h3>Before</h3><SampleFilePreview title="Before protection" /></div><div><h3>Protected</h3><SampleFilePreview protectedIds={protectedIds} title="Protected file context" /></div></div>}
    <div className="trial-footer"><p>Frontend simulation with fictional data. No files are uploaded, and no AI request is sent.</p><button className="reset-button" onClick={resetTrial}><RotateCcw size={15} />Reset / Try Again</button></div>
  </section>;
}
