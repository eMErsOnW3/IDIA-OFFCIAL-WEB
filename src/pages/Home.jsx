import { Download, Play, Check, ShieldCheck, ScanLine, SlidersHorizontal, Fingerprint, ScanText, Laptop, Sparkles, Braces, Eye, FileCheck2 } from 'lucide-react';
import Button from '../components/Button';
import PrivacyDemo from '../components/PrivacyDemo';
import PrivacyFlow from '../components/PrivacyFlow';
import FeatureCard from '../components/FeatureCard';
import DownloadCTA from '../components/DownloadCTA';
import Reveal from '../components/Reveal';

const steps = [
  { title: 'Detect', copy: 'IDIA identifies sensitive information.', Icon: ScanLine },
  { title: 'Review', copy: 'You decide what should be protected.', Icon: Eye },
  { title: 'Protect', copy: 'Sensitive data is masked or tokenized.', Icon: ShieldCheck },
  { title: 'Use AI', copy: 'Only protected content continues to the AI platform.', Icon: Sparkles },
];

export default function Home() {
  return <>
    <section className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />YOUR PRIVACY. YOUR CONTROL.</div><h1>Protect your data<br />before <span className="headline-accent">AI sees it.</span></h1><p className="hero-description">IDIA detects and protects sensitive information before you share text, files, or images with generative AI.</p><div className="hero-actions"><Button to="/download"><Download size={17} />Download IDIA</Button><Button href="#how-it-works" variant="secondary"><Play size={15} />See How It Works</Button></div><div className="hero-benefits"><span><Check size={14} />Local processing</span><span><Check size={14} />You stay in control</span></div></div><div className="hero-demo"><div className="demo-kicker"><span>BEFORE YOU PRESS SEND</span><span>01 / PRIVACY IN ACTION</span></div><PrivacyDemo /><div className="demo-caption"><ShieldCheck size={15} /><span>Your ideas can travel. Your private details don’t have to.</span></div></div></section>
    <section className="context-strip"><div className="container"><span>A privacy layer for your everyday AI use</span><div><span>Text</span><span>Documents</span><span>Images</span><span>Always your choice</span></div></div></section>
    <section className="section container" id="how-it-works"><Reveal><div className="section-heading"><div><div className="eyebrow">HOW IDIA WORKS</div><h2>A little pause.<br />A lot more control.</h2></div><p>Keep the possibilities of AI.<br />Be intentional about what you share.</p></div><div className="steps">{steps.map(({ title, copy, Icon }, index) => <article className="step" key={title}><div className="step-top"><span className="step-icon"><Icon size={22} /></span><span className="step-number">0{index + 1}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></Reveal></section>
    <section className="features-section"><div className="container section"><Reveal><div className="section-heading"><div><div className="eyebrow">THOUGHTFUL PROTECTION</div><h2>Share the context.<br />Keep the private details.</h2></div><p>Built around the information you work with,<br className="desktop-break" /> and the decisions only you can make.</p></div></Reveal><Reveal><div className="features-grid">
      <FeatureCard icon={ScanLine} title="Sensitive Data Detection" className="feature-wide" visual={<div className="detection-example"><span className="example-label">THE DETAILS THAT DESERVE A SECOND LOOK</span><div className="data-tags">{['Names', 'Phone numbers', 'Email addresses', 'ID numbers', 'Addresses', 'Account information'].map(item => <span key={item}><span className="tiny-square" />{item}</span>)}</div></div>}>Catch personal details before they become part of a prompt. See what’s sensitive, clearly and in context.</FeatureCard>
      <FeatureCard icon={Braces} title="Tokenization" className="feature-token" visual={<div className="token-example"><span className="sensitive">Leon</span><span className="token-rule" aria-hidden="true" /><span className="token">[NAME_1]</span></div>}>Replace private values with meaningful placeholders. Preserve the context you need.</FeatureCard>
      <FeatureCard icon={SlidersHorizontal} title="User-Controlled Review" visual={<div className="review-example"><Check size={15} /><span>You make the final call.</span></div>}>Review detected information and choose what to mask, replace, or tokenize.</FeatureCard>
      <FeatureCard icon={ScanText} title="OCR Protection" badge="COMING TO PRO">Privacy extends beyond typed text. Image detection is planned for Pro, bringing sensitive details in images into view.</FeatureCard>
      <FeatureCard icon={Laptop} title="Local Processing">Designed to process sensitive information on your device, keeping protection close to the source.</FeatureCard>
      <FeatureCard icon={Sparkles} title="AI Compatibility" className="feature-wide feature-compatibility" visual={<div className="compatibility-visual"><span><FileCheck2 size={20} />Protected content</span><span className="compatibility-line" /><span><Sparkles size={20} />Your AI workflow</span></div>}>A privacy step before the AI step. Review and protect your content before using it in your AI workflow.</FeatureCard>
    </div></Reveal></div></section>
    <section className="section container flow-section"><Reveal className="flow-copy"><div className="eyebrow">A BOUNDARY THAT MATTERS</div><h2>Your information.<br />On your terms.</h2><p>There’s a moment between having an idea and sharing it with AI. That’s where IDIA belongs.</p><p>A privacy layer gives you space to notice sensitive details, protect them, and decide what goes next.</p><div className="flow-note"><Fingerprint size={22} /><span>Keep control before your content<br />leaves your hands.</span></div></Reveal><Reveal><PrivacyFlow /></Reveal></section>
    <Reveal><DownloadCTA /></Reveal>
  </>;
}
