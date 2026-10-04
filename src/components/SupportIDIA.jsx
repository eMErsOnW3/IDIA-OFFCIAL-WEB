import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import DonationModal from './DonationModal';

export default function SupportIDIA() {
  const [open, setOpen] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);
  useEffect(() => {
    // Keep the floating control above the footer, in the About page's bottom space.
    const update = () => {
      const footer = document.querySelector('.site-footer');
      setFooterOffset(footer ? Math.max(0, window.innerHeight - footer.getBoundingClientRect().top) : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);
  return <>
    <button className="button button--primary support-float" style={{ '--footer-offset': `${footerOffset}px` }} onClick={() => setOpen(true)} aria-haspopup="dialog"><Heart size={17} />Support IDIA</button>
    {open && <DonationModal onClose={() => setOpen(false)} />}
  </>;
}
