import { Check, FileCheck2, Sparkles } from 'lucide-react';
import FeatureCard from './FeatureCard';
import Reveal from './Reveal';
import { detectableDataTypes, features } from '../data/features';

const visuals = {
  detection: <div className="detection-example"><span className="example-label">THE DETAILS THAT DESERVE A SECOND LOOK</span><div className="data-tags">{detectableDataTypes.map(item => <span key={item}><span className="tiny-square" />{item}</span>)}</div></div>,
  tokens: <div className="token-example"><span className="sensitive">john@example.com</span><span className="token-rule" aria-hidden="true" /><span className="token">[IDIA_EMAIL_…]</span></div>,
  review: <div className="review-example"><Check size={15} /><span>You make the final call.</span></div>,
  compatibility: <div className="compatibility-visual"><span><FileCheck2 size={20} />Protected content</span><span className="compatibility-line" /><span><Sparkles size={20} />Your AI workflow</span></div>,
};
export default function HomeFeatures() {
  return <section className="features-section"><div className="container section">
    <Reveal><div className="section-heading"><div><div className="eyebrow">THOUGHTFUL PROTECTION</div><h2>Share the context.<br />Keep the private details.</h2></div><p>Built around the information you work with,<br className="desktop-break" /> and the decisions only you can make.</p></div></Reveal>
    <Reveal><div className="features-grid">{features.map(({ id, copy, ...feature }) => <FeatureCard key={id} {...feature} visual={visuals[id]}>{copy}</FeatureCard>)}</div></Reveal>
  </div></section>;
}
