import { Link } from 'react-router-dom';
import Logo from './Logo';
import { navigation } from './Navbar';

export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-top"><div><Logo /><p>Privacy before the prompt.</p></div><nav aria-label="Footer navigation">{navigation.map(([path, label]) => <Link to={path} key={path}>{label}</Link>)}</nav></div>
    <p className="footer-contact">Contact us: <a href="mailto:vsusa3000@gmail.com">vsusa3000@gmail.com</a></p>
    <div className="footer-bottom"><span>© 2026 IORA</span><div><Link to="/privacy/">Privacy Policy</Link><Link to="/terms/">Terms of Service</Link></div><span className="footer-note">A little more privacy. A lot more control.</span></div>
  </div></footer>;
}
