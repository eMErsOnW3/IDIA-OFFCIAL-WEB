import { Link } from 'react-router-dom';
import Logo from './Logo';
import { navigation } from './Navbar';

export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Logo /><p>Privacy before the prompt.</p></div><nav aria-label="Footer navigation">{navigation.map(([path, label]) => <Link to={path} key={path}>{label}</Link>)}</nav></div>
    <div className="footer-bottom"><span>© 2026 IDIA</span><div><span className="reserved-link" aria-disabled="true" title="Privacy Policy — coming soon">Privacy Policy <span className="sr-only">(coming soon)</span></span><span className="reserved-link" aria-disabled="true" title="Terms of Service — coming soon">Terms of Service <span className="sr-only">(coming soon)</span></span></div><span className="footer-note">A little more privacy. A lot more control.</span></div>
  </div></footer>;
}
