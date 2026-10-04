import { UserRound } from 'lucide-react';

export default function TeamMember({ photo, name, role, introduction }) {
  return <article className="team-member founder-card">
    {photo?.src
      ? <img className="team-photo" src={photo.src} alt={photo.alt || `Portrait of ${name || role}`} loading="lazy" width="320" height="400" />
      : <div className="team-photo team-photo-placeholder" aria-label="Photo placeholder"><UserRound size={25} aria-hidden="true" /><span>Photo</span></div>}
    <h3>{name || role}</h3>
    {name && <p className="team-role">{role}</p>}
    <p className="team-introduction">{introduction}</p>
  </article>;
}
