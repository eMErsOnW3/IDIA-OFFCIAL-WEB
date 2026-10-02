import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Logo() {
  return <Link className="logo" to="/" aria-label="IDIA home"><span className="logo-mark"><ShieldCheck size={24} strokeWidth={1.7} /></span><span>IDIA<span className="logo-period">.</span></span></Link>;
}
