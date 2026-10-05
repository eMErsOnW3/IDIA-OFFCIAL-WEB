import '../styles/privacy.css';

const sections = [
  { id: 'acceptance', title: 'Acceptance of Terms', paragraphs: ['By accessing, downloading, installing, or using IDIA, you agree to these Terms of Service.'] },
  { id: 'service', title: 'Description of the Service', paragraphs: ['IDIA provides privacy-related tools intended to help users detect, review, mask, tokenize, or otherwise protect selected information before or during interactions with AI systems.', 'Features may vary by browser, operating system, product version, plan, and development stage. A feature available in one version may not be available in another.'] },
  { id: 'responsibility', title: 'User Responsibility', paragraphs: ['You are responsible for:'], items: ['Reviewing detected information.', 'Deciding what information to protect.', 'Verifying outputs before sharing them.', 'Using IDIA lawfully.', 'Maintaining appropriate backups of important files.'] },
  { id: 'detection', title: 'No Guarantee of Complete Detection', paragraphs: ['IDIA may not detect every form of sensitive, confidential, personal, or regulated information. Detection and protection can be incomplete or incorrect.', 'Do not rely on IDIA as the sole safeguard for highly sensitive information. Review content and protected outputs before sharing them.'] },
  { id: 'processing', title: 'Local Processing and Data Handling', paragraphs: ['Certain IDIA functionality is designed to operate locally in your browser or on your device where supported. Supported local functionality can include sensitive-information detection, masking, tokenization, and decoding.', 'Data handling depends on the product version and supported features. Product behavior can change as IDIA develops. Review the Privacy Policy and the information provided in the version you use to understand how it handles your content.'] },
  { id: 'third-parties', title: 'AI Platforms and Third-Party Services', paragraphs: ['IDIA may be used alongside third-party AI platforms and services. IORA does not control those platforms and is not responsible for their availability, privacy practices, security practices, outputs, or terms.', 'You remain responsible for reviewing the policies and terms of third-party services you use and deciding what information to share with them.'] },
  { id: 'beta', title: 'Beta and Experimental Features', paragraphs: ['IDIA is under active development. Some versions or features may be beta, experimental, incomplete, modified, or discontinued.', 'Beta software may contain errors. Review its outputs and maintain backups before processing important files.'] },
  { id: 'use', title: 'Acceptable Use', paragraphs: ['You may not use IDIA to:'], items: ['Violate applicable law.', 'Interfere with or attack systems.', 'Distribute malware.', 'Bypass lawful security controls.', "Misuse another person's information."] },
  { id: 'ownership', title: 'Intellectual Property', paragraphs: ['The IDIA name, IORA branding, website design, software, and associated materials are owned by IORA or their respective rights holders unless otherwise indicated. Third-party materials remain subject to their applicable licenses and rights.'] },
  { id: 'availability', title: 'Availability and Changes', paragraphs: ['IORA may modify, suspend, update, or discontinue parts of IDIA as the product evolves. Features and availability may change between releases.'] },
  { id: 'disclaimer', title: 'Disclaimer', paragraphs: ['During its current development stage, IDIA is provided on an “as available” basis. IORA does not promise perfect privacy, perfect detection, uninterrupted availability, or error-free operation.'] },
  { id: 'liability', title: 'Limitation of Liability', paragraphs: ['To the extent permitted by applicable law, IORA is not responsible for indirect or consequential losses arising from use of IDIA. Nothing in these Terms excludes or limits liability or rights that cannot be excluded or limited under applicable law.'] },
  { id: 'changes', title: 'Changes to These Terms', paragraphs: ['These Terms may be updated as IDIA develops. Updated Terms will be published on this page with an effective date. Review this page periodically for changes.'] },
  { id: 'contact', title: 'Contact', paragraphs: ['For questions about these Terms, contact IORA.'] },
  { id: 'effective-date', title: 'Effective Date', paragraphs: ['Effective date: October 5, 2026'] },
];

export default function Terms() {
  return <div className="privacy-page terms-page">
    <header className="container privacy-intro">
      <div className="eyebrow"><span className="eyebrow-line" />IORA / IDIA</div>
      <h1>Terms of Service</h1>
      <p className="privacy-updated">Effective date: <time dateTime="2026-10-05">October 5, 2026</time></p>
      <p className="privacy-lead">These Terms of Service govern your access to and use of IDIA, a privacy-focused software product developed by IORA.</p>
    </header>
    <div className="container privacy-layout">
      <aside className="privacy-sidebar"><nav className="privacy-toc" aria-label="Terms of Service sections">
        <h2>On this page</h2>
        <ol>{sections.map(section => <li key={section.id}><a href={`#terms-${section.id}`}>{section.title}</a></li>)}</ol>
      </nav></aside>
      <article className="privacy-body" aria-label="Terms of Service">
        {sections.map((section, index) => <section className="privacy-section" id={`terms-${section.id}`} aria-labelledby={`terms-${section.id}-heading`} key={section.id}>
          <h2 id={`terms-${section.id}-heading`}><span>{index + 1}.</span> {section.title}</h2>
          {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.items && <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.id === 'contact' && <p>Contact us: <a className="privacy-email" href="mailto:vsusa3000@gmail.com">vsusa3000@gmail.com</a></p>}
        </section>)}
      </article>
    </div>
  </div>;
}
