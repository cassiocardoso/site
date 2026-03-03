import { Fragment } from 'react';
import {
  AtSign,
  Codepen,
  Download,
  Facebook,
  Github,
  Hash,
  Home,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  Twitter,
} from 'lucide-react';

import { Container } from '@/components/container';
import { ThemeSelector } from '@/components/theme-selector';
import { type ResumeSchema } from '@/types/resume';
import { EducationSnippet } from './resume/education-snippet';
import { ProjectSnippet } from './resume/project-snippet';
import { WorkSnippet } from './resume/work-snippet';

type Props = {
  resume: ResumeSchema;
};

export function ResumeLayout({ resume }: Props) {
  const { basics, education, languages, projects, skills, volunteer, work } = resume;

  const getProfileIcon = (network: string) => {
    switch (network) {
      case 'CodePen':
        return <Codepen size={24} />;
      case 'Facebook':
        return <Facebook size={24} />;
      case 'GitHub':
        return <Github size={24} />;
      case 'Instagram':
        return <Instagram size={24} />;
      case 'LinkedIn':
        return <Linkedin size={24} />;
      case 'npm':
        return <Hash size={24} />;
      case 'Stack Overflow':
        return <MessageSquare size={24} />;
      case 'Telegram':
        return <Send size={24} />;
      case 'Twitter':
        return <Twitter size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-screen">
      <Container>
        <ThemeSelector />
        <section>
          <div className="flex justify-center pt-xxl">
            <img
              src={basics?.picture ?? ''}
              height={225}
              width={180}
              alt={basics?.name ?? ''}
              className="[clip-path:circle(70px_at_center_70px)]"
            />
          </div>
          <h1 className="text-xl">{basics.name}</h1>
          <p className="mb-md text-lg">{basics.label}</p>
          <p>{basics.summary}</p>
          <div className="resume-divider" />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:gap-md">
            <aside>
              <a
                href="/2021_CC_RESUME.pdf"
                download
                className="mb-md flex items-center justify-center gap-xs rounded-[2rem] border-2 border-current px-xs py-xs no-underline transition-[background] duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-gray-100 dark:hover:border-purple-500 dark:hover:bg-purple-500"
              >
                <Download size={32} />
                Download as PDF
              </a>
              <div className="mb-md flex items-center gap-xs">
                <Home size={24} />
                <span>{`${basics.location.city}, ${basics.location.region}, ${basics.location.countryCode}`}</span>
              </div>
              <div className="mb-md flex items-center gap-xs">
                <AtSign size={24} />
                <span>{basics.email}</span>
              </div>
              {basics.profiles.map((profile) => (
                <div key={profile.network} className="mb-md flex items-center gap-xs">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-xs"
                  >
                    {getProfileIcon(profile.network)}
                    {profile.username}
                  </a>
                </div>
              ))}
              <div className="resume-divider resume-divider--small" />
              <h3>Skills</h3>
              <dl>
                {skills.map((skill) => (
                  <Fragment key={skill.name}>
                    <dt className="mb-xs">{skill.name}</dt>
                    <dd className="mb-md">{skill.keywords.join(', ')}</dd>
                  </Fragment>
                ))}
              </dl>
              <div className="resume-divider resume-divider--small" />
              <h3>Languages</h3>
              <dl>
                {languages.map((language) => (
                  <Fragment key={language.language}>
                    <dt className="mb-xs">{language.language}</dt>
                    <dd className="mb-md">{language.fluency}</dd>
                  </Fragment>
                ))}
              </dl>
            </aside>
            <main>
              <section>
                <h3 className="mb-sm text-lg">Professional experience</h3>
                {work.map((item) => (
                  <WorkSnippet key={`${item.name}-${item.startDate}`} work={item} />
                ))}
              </section>
              <div className="resume-divider resume-divider--small" />
              <section>
                <h3 className="mb-sm text-lg">Education</h3>
                {education.map((item) => (
                  <EducationSnippet key={item.area} education={item} />
                ))}
              </section>
              <div className="resume-divider resume-divider--small" />
              <section>
                <h3 className="mb-sm text-lg">Projects</h3>
                {projects.map((item) => (
                  <ProjectSnippet key={item.organization} project={item} />
                ))}
              </section>
              <section>
                <h3 className="mb-sm text-lg">Volunteering</h3>
                {volunteer.map((item) => (
                  <ProjectSnippet key={item.organization} project={item} />
                ))}
              </section>
            </main>
          </div>
        </section>
      </Container>
    </div>
  );
}
