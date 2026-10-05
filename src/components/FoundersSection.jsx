import TeamMember from './TeamMember';
import Reveal from './Reveal';
import { teamMembers } from '../data/team';

export default function FoundersSection() {
  return <section className="container section founders-section" aria-labelledby="founders-title"><Reveal>
    <div className="section-heading"><div><div className="eyebrow">MEET THE FOUNDERS</div><h2 id="founders-title">Five perspectives.<br />One shared goal.</h2></div></div>
    <div className="founders-grid">{teamMembers.map(member => <TeamMember key={member.id} {...member} />)}</div>
    <p className="founders-caption">Meet the IORA team behind IDIA. Making AI more useful without making privacy optional.</p>
  </Reveal></section>;
}
