export interface ResumeSchema {
  basics: Basics;
  work: Work[];
  volunteer: Project[];
  education: Education[];
  projects: Project[];
  awards: any[];
  publications: any[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  meta: Meta;
}

export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: Date;
  endDate: Date;
  gpa: string;
  courses: any[];
}

export interface Interest {
  name: string;
  keywords: string[];
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Meta {
  url: string;
  version: string;
  lastModified: Date;
}

export interface Project {
  organization: string;
  position: string;
  website: string;
  area?: string;
  startDate: Date;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Skill {
  name: string;
  level: string;
  keywords: string[];
}

export interface Work {
  name: string;
  location: string;
  description: string;
  position: string;
  url?: string;
  startDate: Date;
  endDate: string;
  summary: string;
  highlights: string[];
  website?: string;
}
