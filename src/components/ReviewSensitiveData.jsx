import { sampleEntities } from '../data/sampleContent';

export default function ReviewSensitiveData({ selected, onToggle, disabled }) {
  return <fieldset className="sensitive-review" disabled={disabled}>
    <legend>5 sensitive items detected</legend>
    <p>Choose what to protect. Unselected details stay visible.</p>
    <div className="review-options">{sampleEntities.map(({ id, label, value, Icon }) => <label key={id}>
      <input type="checkbox" checked={selected.includes(id)} onChange={() => onToggle(id)} aria-label={label} />
      <Icon size={16} aria-hidden="true" />
      <span><strong>{label}</strong><span>{value}</span></span>
    </label>)}</div>
  </fieldset>;
}
