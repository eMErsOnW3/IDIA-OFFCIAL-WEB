import { useState } from 'react';
import { FileCheck2, Braces, MessageSquare } from 'lucide-react';
import Reveal from './Reveal';

export default function ProductWorkflows() {
  const [decoded, setDecoded] = useState(false);
  return <section className="section container product-workflows" aria-label="Three IDIA workflows"><Reveal><div className="section-heading"><div><div className="eyebrow">BEFORE SHARING. AFTER AI.</div><h2>One local privacy layer.<br />Three everyday workflows.</h2></div><p>Protection before disclosure.<br />Local decoding when tokens return.</p></div><div className="workflow-grid">
    <article className="workflow-card"><MessageSquare size={24} /><h3>Protect text before sending</h3><p>Detect → Review → Protect. Choose individual findings, then review the tokenized draft before you send.</p><div className="workflow-sample">Email → <code>[IDIA_EMAIL_…]</code></div><small>Unselected and undetected values remain visible. Detection does not guarantee that a prompt is private.</small></article>
    <article className="workflow-card"><FileCheck2 size={24} /><h3>Protect files before upload</h3><p>Create a protected copy while keeping the original file unchanged.</p><div className="workflow-sample"><strong>report.docx → report-safe.docx</strong><br />TXT · CSV · DOCX · XLSX<br />PDF · PNG · JPG · JPEG</div><small>Text formats use tokens. PDF and image protection redraws sanitized pixels and is irreversible; OCR can miss information.</small></article>
    <article className="workflow-card"><Braces size={24} /><h3>Decode locally after AI</h3><p>Paste a protected AI response or choose TXT, CSV, DOCX or XLSX in the manual Decode Panel.</p><div className="workflow-sample" aria-live="polite">Contact {decoded ? 'alex@example.com' : '[IDIA_EMAIL_…]'}.</div><button className="button button-secondary workflow-decode" onClick={() => setDecoded(!decoded)}>{decoded ? 'Show Protected Example' : 'View Decoded Example'}</button><small>Fictional example; abbreviated token. Real decoding requires exact mappings in the current conversation’s Session Vault. PDF/images cannot be decoded.</small></article>
  </div><p className="workflow-limit">The vault stays in this browser session. Clearing it, restarting Chrome or reloading IDIA may remove the ability to decode old tokens. No mapping is sent to the AI.</p></Reveal></section>;
}
