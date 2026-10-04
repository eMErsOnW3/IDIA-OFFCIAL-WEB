import { ScanLine, Braces, SlidersHorizontal, ScanText, Laptop, Sparkles, Workflow } from 'lucide-react';

export const detectableDataTypes = ['Phone numbers', 'Email addresses', 'Chinese IDs / SSNs', 'Validated cards', 'Supported addresses', 'IPv4 addresses', 'API Keys'];

export const features = [
  { id: 'detection', icon: ScanLine, title: 'Sensitive Data Detection', className: 'feature-wide', copy: 'Catch personal details before they become part of a prompt. See what’s sensitive, clearly and in context.' },
  { id: 'tokens', icon: Braces, title: 'Reversible Tokens', className: 'feature-token', copy: 'Replace selected values with random, conversation-scoped tokens. Only your local Session Vault holds their originals.' },
  { id: 'review', icon: SlidersHorizontal, title: 'User-Controlled Review', copy: 'Review detected information and choose what to mask, replace, or tokenize.' },
  { id: 'ocr', icon: ScanText, title: 'Local OCR', copy: 'Scan image-based PDF pages and PNG/JPG/JPEG locally in English, Simplified Chinese and Japanese. Review uncertain results carefully.' },
  { id: 'local', icon: Laptop, title: 'Local Processing', copy: 'Detection, OCR and decoding run on your device with bundled libraries. Original files remain unchanged.' },
  { id: 'compatibility', icon: Sparkles, title: 'AI Compatibility', className: 'feature-wide', copy: 'Adapters for ChatGPT, Gemini, Claude, DeepSeek, Copilot, Perplexity and Grok share one privacy engine. All seven have simulated compatibility tests; live site interfaces may vary.' },
  { id: 'agents', icon: Workflow, title: 'Agent-to-Agent Protection', copy: 'Protect selected sensitive information before it is passed between AI agents.' },
];
