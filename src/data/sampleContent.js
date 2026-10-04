import { UserRound, Mail, Phone, MapPin, KeyRound } from 'lucide-react';

// Fictional, fixed demonstration data. No detection engine or real credentials.
export const sampleEntities = [
  { id: 'name', label: 'Name', field: 'Client', value: 'Maya Chen', token: '[IDIA_NAME_A1]', Icon: UserRound },
  { id: 'email', label: 'Email', field: 'Email', value: 'maya.chen@example.com', token: '[IDIA_EMAIL_B2]', Icon: Mail },
  { id: 'phone', label: 'Phone', field: 'Phone', value: '+1 (202) 555-0147', token: '[IDIA_PHONE_C3]', Icon: Phone },
  { id: 'address', label: 'Address', field: 'Office', value: '1842 Market Street, San Francisco, CA', token: '[IDIA_ADDRESS_D4]', Icon: MapPin },
  { id: 'apiKey', label: 'API Key', field: 'Internal staging API key', value: 'sk-demo-7F92A1C4B8E6', token: '[IDIA_API_KEY_E5]', Icon: KeyRound },
];
export const sampleFileName = 'client-handoff.pdf';
export const sampleProject = 'AI Workflow Integration';
export const sampleNotes = 'The client wants a concise implementation summary and a list of open questions before Friday.';
export const heroRequest = 'Please summarize these client onboarding notes and draft a short follow-up email.';
export const heroContext = 'The client wants the first draft ready by Friday.';
export const allSampleIds = sampleEntities.map(entity => entity.id);
