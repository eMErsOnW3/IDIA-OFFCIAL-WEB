import { FileText } from 'lucide-react';
import { sampleEntities, sampleFileName, sampleProject, sampleNotes } from '../data/sampleContent';

export default function SampleFilePreview({ protectedIds = [], title = 'Sample document preview', id }) {
  return <article className="sample-document" aria-label={title} id={id}>
    <div className="sample-document-file"><FileText size={17} /><span>{sampleFileName}</span><span>Sample</span></div>
    <div className="sample-document-page">
      <div className="document-letterhead"><span>IDIA / SAMPLE</span><span>01</span></div>
      <h3>CLIENT HANDOFF — INTERNAL</h3>
      <p className="fictional-note">Fictional demonstration data</p>
      <dl className="document-details">
        {sampleEntities.map(entity => <div key={entity.id} data-field={entity.id}><dt>{entity.field}</dt><dd>{protectedIds.includes(entity.id) ? <mark className="token">{entity.token}</mark> : entity.value}</dd></div>)}
        <div><dt>Project</dt><dd>{sampleProject}</dd></div>
        <div className="document-notes"><dt>Notes</dt><dd>{sampleNotes}</dd></div>
      </dl>
    </div>
  </article>;
}
