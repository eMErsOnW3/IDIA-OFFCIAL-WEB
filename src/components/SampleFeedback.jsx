import { sampleFeedback } from '../data/sampleFeedback';

export default function SampleFeedback() {
  return <section className="section container sample-feedback" aria-labelledby="sample-feedback-title">
    <div className="centered-heading"><div className="eyebrow">SAMPLE FEEDBACK</div><h2 id="sample-feedback-title">A perspective on everyday privacy.</h2><p>Illustrative examples, not verified customer testimonials.</p></div>
    <div className="sample-feedback-grid">{sampleFeedback.map(({ role, quote }) => <figure className="feedback-card" key={role}><blockquote>“{quote}”</blockquote><figcaption><strong>{role}</strong><span>Sample feedback</span></figcaption></figure>)}</div>
  </section>;
}
