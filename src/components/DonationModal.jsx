import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import { groupPhoto } from '../data/team';
import { supportConfig } from '../data/support';

export default function DonationModal({ onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);
  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.current.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), textarea:not(:disabled), select:not(:disabled), [tabindex="0"]')].filter(element => element.getClientRects().length);
    if (!controls.length) { event.preventDefault(); dialog.current.focus(); return; }
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  return <dialog ref={dialog} className="donation-modal" onKeyDown={trapFocus} aria-labelledby="support-title" aria-describedby="support-description" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <button className="modal-close" aria-label="Close support dialog" onClick={onClose} autoFocus><X size={21} /></button>
    <div className="donation-panel">
      <img className="group-photo" src={groupPhoto.src} alt={groupPhoto.alt} width="1448" height="1086" />
      <div className="donation-copy"><div className="eyebrow">PRIVACY IS WORTH BUILDING.</div><h2 id="support-title">Support IDIA</h2><p id="support-description">IDIA is being built by IORA, a small team working to make privacy a natural part of everyday AI use.</p><p>Your support helps us continue developing, testing, and improving the project.</p>
        {supportConfig.donationUrl ? <Button href={supportConfig.donationUrl} target="_blank" rel="noopener noreferrer">View donation options</Button> : <div className="donation-placeholder">Donation options coming soon.</div>}
      </div>
    </div>
  </dialog>;
}
