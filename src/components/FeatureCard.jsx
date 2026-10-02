export default function FeatureCard({ icon: Icon, title, children, className = '', visual, badge }) {
  return <article className={`feature-card ${className}`}><div className="feature-icon"><Icon size={22} /></div>{badge && <span className="feature-badge">{badge}</span>}<h3>{title}</h3><p>{children}</p>{visual}</article>;
}
