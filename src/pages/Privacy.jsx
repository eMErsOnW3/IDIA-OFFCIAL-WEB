import '../styles/privacy.css';

const privacyContactEmail = 'vsusa3000@gmail.com';

const sections = [
  {
    id: 'information', title: 'Information IDIA Processes',
    paragraphs: ['IDIA may process user-provided content in order to detect sensitive information, including:'],
    items: ['Names', 'Phone numbers', 'Email addresses', 'Identification numbers', 'Addresses', 'Account or other sensitive information', 'Text contained in uploaded files or images'],
    closing: 'This processing is performed only to provide IDIA’s privacy-protection functionality.',
  },
  {
    id: 'local-processing', title: 'Local Processing',
    paragraphs: [
      'Sensitive-information detection, masking, tokenization, and decoding are performed locally in the user’s browser/device.',
      'IDIA does not send the user’s original sensitive content to IDIA servers for the purpose of detection or tokenization.',
    ],
  },
  {
    id: 'local-storage', title: 'Local Storage',
    paragraphs: ['IDIA may store:'],
    items: ['User preferences', 'Extension configuration', 'Conversation-scoped token mappings required for decoding protected content'],
    closing: 'This information is stored locally using browser storage and is used only to provide the extension’s functionality.',
  },
  {
    id: 'ai-websites', title: 'AI Websites',
    paragraphs: [
      'IDIA can operate on supported AI websites in order to detect and protect sensitive information before users submit content.',
      'IDIA does not control the privacy practices of third-party AI services. Once a user chooses to submit content to a third-party AI platform, that platform’s own privacy policy and terms apply.',
    ],
  },
  {
    id: 'files-and-images', title: 'File and Image Processing',
    paragraphs: [
      'When users choose to process files or images, IDIA may extract text from those files or images in order to detect sensitive information.',
      'This processing is performed locally unless explicitly stated otherwise in the product.',
    ],
  },
  {
    id: 'data-sharing', title: 'Data Sharing',
    paragraphs: ['IDIA does not sell user data.', 'IDIA does not share user data with advertisers.', 'IDIA does not use sensitive user content for advertising, profiling, or unrelated purposes.'],
  },
  {
    id: 'permissions', title: 'Chrome Extension Permissions',
    paragraphs: ['IDIA requests only permissions required to provide its privacy-protection features.', 'These permissions may include:'],
    items: ['Storage, to save preferences and local token mappings', 'Host permissions, to allow IDIA to operate on supported AI websites', 'Other browser permissions required for the extension’s core functionality'],
  },
  {
    id: 'retention', title: 'Data Retention',
    paragraphs: ['Locally stored settings and token mappings may remain in browser storage until they are deleted by the user, cleared by the browser, or removed when the extension is uninstalled.'],
  },
  {
    id: 'security', title: 'Security',
    paragraphs: ['IDIA is designed to minimize exposure of sensitive information by processing protected content locally whenever possible.'],
  },
  {
    id: 'children', title: 'Children’s Privacy',
    paragraphs: ['IDIA is not specifically designed to collect personal information from children.'],
  },
  {
    id: 'changes', title: 'Changes to This Policy',
    paragraphs: ['This Privacy Policy may be updated as IDIA’s functionality changes. The latest version will always be available on this page.'],
  },
  {
    id: 'contact', title: 'Contact',
    paragraphs: ['For privacy questions or support, contact:'],
  },
];

export default function Privacy() {
  return <div className="privacy-page">
    <header className="container privacy-intro">
      <div className="eyebrow"><span className="eyebrow-line" />PRIVACY &amp; TRANSPARENCY</div>
      <h1>IDIA Privacy Policy</h1>
      <p className="privacy-updated">Last Updated: <time dateTime="2026-10-04">October 4, 2026</time></p>
      <p className="privacy-lead">IDIA Privacy Protector is designed to help users protect sensitive information before sharing content with supported AI services. This Privacy Policy explains how the IDIA Chrome extension handles user information.</p>
    </header>
    <div className="container privacy-layout">
      <aside className="privacy-sidebar">
        <nav aria-label="Privacy policy sections" className="privacy-toc">
          <h2>On this page</h2>
          <ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ol>
        </nav>
      </aside>
      <article className="privacy-body" aria-label="Privacy policy">
        {sections.map((section, index) => <section id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`} className="privacy-section">
          <h2 id={`${section.id}-heading`}><span>{index + 1}.</span> {section.title}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.closing && <p>{section.closing}</p>}
          {section.id === 'contact' && <a className="privacy-email" href={`mailto:${privacyContactEmail}`}>{privacyContactEmail}</a>}
        </section>)}
      </article>
    </div>
  </div>;
}
