import Button from '../components/Button';
export default function NotFound() {
  return <section className="container page-intro not-found"><div className="eyebrow">404 · PAGE NOT FOUND</div><h1>This page isn’t here.</h1><p>Let’s get you back to privacy before the prompt.</p><Button to="/">Back to Home</Button></section>;
}
