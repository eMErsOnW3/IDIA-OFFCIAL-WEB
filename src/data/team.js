// Add approved names here when available. Order is intentionally CTO → CPO → CFO → CMO → CEO.
const asset = (filename) => `${import.meta.env.BASE_URL}team/${filename}`;
export const teamMembers = [
  { id: 'cto', name: '', role: 'CTO', introduction: "Leads IDIA's technical architecture, privacy engine, and product reliability.", photo: { src: asset('cto.png'), alt: 'IDIA CTO portrait' } },
  { id: 'cpo', name: '', role: 'CPO', introduction: 'Shapes the product experience and turns privacy needs into practical workflows.', photo: { src: asset('cpo.png'), alt: 'IDIA CPO portrait' } },
  { id: 'cfo', name: '', role: 'CFO', introduction: 'Guides financial planning, sustainable growth, and how the team allocates resources.', photo: { src: asset('cfo.png'), alt: 'IDIA CFO portrait' } },
  { id: 'cmo', name: '', role: 'CMO', introduction: "Leads IDIA's messaging, outreach, and how we communicate privacy to users.", photo: { src: asset('cmo.png'), alt: 'IDIA CMO portrait' } },
  { id: 'ceo', name: '', role: 'CEO', introduction: "Coordinates product strategy, team direction, and IDIA's long-term vision.", photo: { src: asset('ceo.png'), alt: 'IDIA CEO portrait' } },
];
export const groupPhoto = { src: asset('group.png'), alt: 'The five IDIA founders together' };
