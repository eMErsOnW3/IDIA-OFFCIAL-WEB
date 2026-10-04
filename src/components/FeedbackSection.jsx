import { useId, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Button from './Button';

export default function FeedbackSection() {
  const [message, setMessage] = useState('');
  const [tested, setTested] = useState(false);
  const id = useId();
  function submit(event) {
    event.preventDefault();
    if (!message.trim()) return;
    setTested(true);
  }
  return <section className="section container about-feedback" aria-labelledby="feedback-title">
    <div><div className="eyebrow">YOUR PERSPECTIVE MATTERS</div><h2 id="feedback-title">Tell us what you think.</h2><p>We're still building IDIA. Your perspective helps us decide what matters next.</p></div>
    <form className="feedback-composer" onSubmit={submit}>
      <label htmlFor={id}><MessageSquare size={18} />Your feedback</label>
      <textarea id={id} placeholder="Share a thought, question, or suggestion..." value={message} maxLength={2000} rows={5} onChange={event => { setMessage(event.target.value); setTested(false); }} aria-describedby={`${id}-notice`} />
      <div className="feedback-actions"><span>{message.length}/2000</span><Button type="submit" disabled={!message.trim()}>Send Feedback</Button></div>
      <p id={`${id}-notice`} className="feedback-notice" role="status">{tested ? 'Thanks for testing the feedback form. Online submission is not connected yet.' : 'Online submission is not connected yet. Your text stays only in this form.'}</p>
    </form>
  </section>;
}
