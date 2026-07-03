export type Language = 'EN' | 'RU' | 'ES';

export interface NavItem {
  id: string;
  label: Record<Language, string>;
}

export interface PortfolioProject {
  id: string;
  title: Record<Language, string>;
  category: 'residential' | 'commercial' | 'conceptual';
  categoryLabel: Record<Language, string>;
  location: Record<Language, string>;
  area: string;
  year: string;
  image: string;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
}

export interface ServiceItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  price: Record<Language, string>;
  duration: Record<Language, string>;
  features: Record<Language, string[]>;
  iconName: string;
}

export interface TeamMember {
  name: Record<Language, string>;
  role: Record<Language, string>;
  image: string;
  bio: Record<Language, string>;
}

export interface Testimonial {
  id: string;
  author: string;
  role: Record<Language, string>;
  text: Record<Language, string>;
  rating: number;
}

export type ServicePageId = 'architectural-design' | 'interior-design' | 'architecture-build' | 'interiors-build';

