import { sampleFeedback } from '../data/sampleFeedback';

export default function SampleFeedback() {
  return <section className="section container sample-feedback" aria-labelledby="sample-feedback-title">
    <div className="feedback-intro"><div className="eyebrow">FEEDBACK</div><h2 id="sample-feedback-title">A perspective on everyday privacy.</h2><p>Illustrative examples, not verified customer testimonials.</p></div>
    <div className="sample-feedback-grid">{sampleFeedback.map(({ id, quote }) => <figure className="feedback-card" key={id}><blockquote>“{quote}”</blockquote></figure>)}</div>
  </section>;
}
