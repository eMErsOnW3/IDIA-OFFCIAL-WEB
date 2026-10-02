import { useState } from 'react';
import Button from './Button';
import { productConfig } from '../config';
export default function ContactButton() {
  const [notice, setNotice] = useState(false);
  return <div className="contact-action">{productConfig.contactEmail ? <Button variant="secondary" href={`mailto:${productConfig.contactEmail}`}>Contact Us</Button> : <Button variant="secondary" onClick={() => setNotice(true)}>Contact Us</Button>}{notice && <p className="action-notice" role="status">Enterprise contact details will be published here when available.</p>}</div>;
}
