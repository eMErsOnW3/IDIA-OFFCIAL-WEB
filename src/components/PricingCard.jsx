import { Check } from 'lucide-react';
export default function PricingCard({ name, price, description, features, children, className = '', caption }) {
  return <article className={`pricing-card ${className}`}><div className="plan-name">{name}</div><div className="plan-price">{price}</div><p className="plan-description">{description}</p>{children}<div className="plan-divider" /><p className="plan-caption">{caption}</p><ul>{features.map(feature => <li key={feature}><Check size={16} /><span>{feature}</span></li>)}</ul></article>;
}
