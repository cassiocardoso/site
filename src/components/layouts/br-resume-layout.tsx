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

import { type ResumeSchema } from '@/types/resume';
import { EducationSnippet } from './resume/education-snippet';
import { ProjectSnippet } from './resume/project-snippet';
import { WorkSnippet } from './resume/work-snippet';

type Props = {
  resume: ResumeSchema;
};

function getProfileIcon(network: string) {
  const props = { size: 20, className: 'text-br-ink shrink-0' };
  switch (network) {
    case 'CodePen':
      return <Codepen {...props} />;
    case 'Facebook':
      return <Facebook {...props} />;
    case 'GitHub':
      return <Github {...props} />;
    case 'Instagram':
      return <Instagram {...props} />;
    case 'LinkedIn':
      return <Linkedin {...props} />;
    case 'npm':
      return <Hash {...props} />;
    case 'Stack Overflow':
      return <MessageSquare {...props} />;
    case 'Telegram':
      return <Send {...props} />;
    case 'Twitter':
      return <Twitter {...props} />;
    default:
      return null;
  }
}

function SectionDivider() {
  return <div className="my-8 h-[2px] w-full bg-br-ink/10 sm:my-10" />;
}

export function BrResumeLayout({ resume }: Props) {
  const { basics, education, languages, projects, skills, volunteer, work } = resume;

  return (
    <div>
      {/* Summary */}
      <p className="text-[0.95rem] leading-[1.6] text-br-body sm:text-[1.05rem]">
        {basics.summary}
      </p>

      <SectionDivider />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] md:gap-14">
        {/* Sidebar */}
        <aside>
          <a
            href="/2021_CC_RESUME.pdf"
            download
            className="br-btn relative z-10 mb-8 flex min-h-[44px] items-center justify-center gap-2 border-2 border-br-ink bg-br-bg px-4 py-3 font-display text-[0.8rem] font-bold uppercase tracking-[0.1em] text-br-ink no-underline transition-colors hover:bg-br-accent hover:text-br-bg"
          >
            <Download size={18} />
            Download PDF
          </a>

          <div className="space-y-3 text-[0.85rem] text-br-body sm:text-[0.9rem]">
            <div className="flex items-center gap-3">
              <Home size={18} className="shrink-0 text-br-ink" />
              <span>{`${basics.location.city}, ${basics.location.region}, ${basics.location.countryCode}`}</span>
            </div>
            <div className="flex items-center gap-3">
              <AtSign size={18} className="shrink-0 text-br-ink" />
              <span>{basics.email}</span>
            </div>
            {basics.profiles.map((profile) => (
              <div key={profile.network} className="flex items-center gap-3">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-br-accent underline-offset-2 hover:underline"
                >
                  {getProfileIcon(profile.network)}
                  {profile.username}
                </a>
              </div>
            ))}
          </div>

          <SectionDivider />

          <h3 className="mb-4 font-display text-[0.9rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1rem]">
            Skills
          </h3>
          <dl className="text-[0.85rem] sm:text-[0.9rem]">
            {skills.map((skill) => (
              <Fragment key={skill.name}>
                <dt className="mb-1 font-bold text-br-ink">{skill.name}</dt>
                <dd className="mb-4 text-br-muted">{skill.keywords.join(', ')}</dd>
              </Fragment>
            ))}
          </dl>

          <SectionDivider />

          <h3 className="mb-4 font-display text-[0.9rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1rem]">
            Languages
          </h3>
          <dl className="text-[0.85rem] sm:text-[0.9rem]">
            {languages.map((language) => (
              <Fragment key={language.language}>
                <dt className="mb-1 font-bold text-br-ink">{language.language}</dt>
                <dd className="mb-4 text-br-muted">{language.fluency}</dd>
              </Fragment>
            ))}
          </dl>
        </aside>

        {/* Main content */}
        <main>
          <section>
            <h3 className="mb-6 font-display text-[1rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1.15rem]">
              Professional Experience
            </h3>
            {work.map((item) => (
              <WorkSnippet key={`${item.name}-${item.startDate}`} work={item} />
            ))}
          </section>

          <SectionDivider />

          <section>
            <h3 className="mb-6 font-display text-[1rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1.15rem]">
              Education
            </h3>
            {education.map((item) => (
              <EducationSnippet key={item.area} education={item} />
            ))}
          </section>

          <SectionDivider />

          <section>
            <h3 className="mb-6 font-display text-[1rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1.15rem]">
              Projects
            </h3>
            {projects.map((item) => (
              <ProjectSnippet key={item.organization} project={item} />
            ))}
          </section>

          <section>
            <h3 className="mb-6 font-display text-[1rem] font-bold uppercase tracking-[0.08em] text-br-ink sm:text-[1.15rem]">
              Volunteering
            </h3>
            {volunteer.map((item) => (
              <ProjectSnippet key={item.organization} project={item} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
