// Shared types for LegalifiedAI

export type SupportedLanguage = 'en' | 'fr' | 'es' | 'ar' | 'hi' | 'sw';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'client' | 'lawyer' | 'admin';
  language: SupportedLanguage;
}
