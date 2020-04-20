type Location = {
  city: string;
  countryCode: string;
  region: string;
};

type Profile = {
  network: string;
  url: string;
  username: string;
};

type Basics = {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
};

type Work = {
  name: string;
  location: string;
  description: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

type Volunteer = {
  organization: string;
  position: string;
  website: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

type Education = {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  gpa: string;
  courses: string[];
};

type Project = {
  organization: string;
  position: string;
  website: string;
  area: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
};

type Skill = {
  name: string;
  level: string;
  keywords: string[];
};

type Language = {
  language: string;
  fluency: string;
};

type Interest = {
  name: string;
  keywords: string[];
};

type Reference = {
  name: string;
  reference: string;
};

type ResumeMeta = {
  url: string;
  version: string;
  lastModified: string;
};

export type Resume = {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  education: Education[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  meta: ResumeMeta;
};
