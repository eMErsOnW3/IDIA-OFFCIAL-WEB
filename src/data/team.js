// Add approved names here when available. Visual order: CTO, CEO, CFO above CPO, CMO.
const asset = (filename) => `${import.meta.env.BASE_URL}team/${filename}`;
export const teamMembers = [
  { id: 'cto', name: '', role: 'CTO', introduction: "Leads IDIA's technical architecture, privacy engine, and product reliability.", photo: { src: asset('cpo.png'), alt: 'IORA CTO portrait' } },
  { id: 'ceo', name: '', role: 'CEO', introduction: "Coordinates product strategy, team direction, and IDIA's long-term vision.", photo: { src: asset('ceo.png'), alt: 'IORA CEO portrait' } },
  { id: 'cfo', name: '', role: 'CFO', introduction: 'Guides financial planning, sustainable growth, and how the team allocates resources.', photo: { src: asset('cfo.png'), alt: 'IORA CFO portrait' } },
  { id: 'cpo', name: '', role: 'CPO', introduction: 'Shapes the product experience and turns privacy needs into practical workflows.', photo: { src: asset('cto.png'), alt: 'IORA CPO portrait' } },
  { id: 'cmo', name: '', role: 'CMO', introduction: "Leads IDIA's messaging, outreach, and how we communicate privacy to users.", photo: { src: asset('cmo.png'), alt: 'IORA CMO portrait' } },
];
export const groupPhoto = { src: asset('group.png'), alt: 'The five IORA founders together' };
