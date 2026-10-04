import { Download, Play, Check, ShieldCheck, ScanLine, Sparkles, Braces, Eye } from 'lucide-react';
import Button from '../components/Button';
import PrivacyDemo from '../components/PrivacyDemo';
import ProductWorkflows from '../components/ProductWorkflows';
import SampleFileTrial from '../components/SampleFileTrial';
import HomeFeatures from '../components/HomeFeatures';
import DownloadCTA from '../components/DownloadCTA';
import Reveal from '../components/Reveal';

const steps = [
  { title: 'Detect', copy: 'IDIA identifies sensitive information.', Icon: ScanLine },
  { title: 'Review', copy: 'You decide what should be protected.', Icon: Eye },
  { title: 'Protect', copy: 'Sensitive data is masked or tokenized.', Icon: ShieldCheck },
  { title: 'Use AI', copy: 'Send your reviewed content to your AI platform.', Icon: Sparkles },
  { title: 'Decode locally', copy: 'Restore returned tokens using your Session Vault.', Icon: Braces },
];

export default function Home() {
  return <>
    <section className="hero container"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />AI WITHOUT EXPOSURE</div><h1>Protect your data<br />before <span className="headline-accent">AI sees it.</span></h1><p className="hero-description">IDIA detects and protects sensitive information before you share text, files, or images with generative AI.</p><div className="hero-actions"><Button to="/download"><Download size={17} />Download IDIA</Button><Button href="#try-idia" variant="secondary"><Play size={15} />See How It Works</Button></div><div className="hero-benefits"><span><Check size={14} />Local processing</span><span><Check size={14} />You stay in control</span></div></div><div className="hero-demo"><div className="demo-kicker"><span>BEFORE YOU PRESS SEND</span><span>01 / PRIVACY IN ACTION</span></div><PrivacyDemo /><div className="demo-caption"><ShieldCheck size={15} /><span>Your ideas can travel. Your private details don’t have to.</span></div></div></section>
    <section className="context-strip"><div className="container"><span>A privacy layer for your everyday AI use</span><div><span>Text</span><span>Documents</span><span>Images</span><span>Always your choice</span></div></div></section>
    <section className="section container" id="how-it-works"><Reveal><div className="section-heading"><div><div className="eyebrow">HOW IDIA WORKS</div><h2>A little pause.<br />A lot more control.</h2></div><p>Keep the possibilities of AI.<br />Be intentional about what you share.</p></div><div className="steps">{steps.map(({ title, copy, Icon }, index) => <article className="step" key={title}><div className="step-top"><span className="step-icon"><Icon size={22} /></span><span className="step-number">0{index + 1}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></Reveal></section>
    <ProductWorkflows />
    <HomeFeatures />
    <SampleFileTrial />
    <Reveal><DownloadCTA /></Reveal>
  </>;
}
