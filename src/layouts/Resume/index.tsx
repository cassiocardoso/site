import { Fragment, FC, ReactElement } from 'react';
import {
  AtSign,
  Codepen,
  Download,
  Facebook,
  GitHub,
  Hash,
  Home,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  Twitter,
} from 'react-feather';

import { ThemeSelector } from 'components/ThemeSelector';
import { Container } from 'components/Container';
import { ResumeSchema } from '../../@types/resume';
import { EducationSnippet } from './EducationSnippet';
import { ProjectSnippet } from './ProjectSnippet';
import { WorkSnippet } from './WorkSnippet';
import * as S from './styles';

type Props = {
  resume: ResumeSchema;
};

export const ResumeLayout: FC<Props> = ({ resume }: Props) => {
  const { basics, education, languages, projects, skills, volunteer, work } = resume;

  const getProfileIcon = (network: string): ReactElement | null => {
    switch (network) {
      case 'CodePen':
        return <Codepen size={24} />;
      case 'Facebook':
        return <Facebook size={24} />;
      case 'GitHub':
        return <GitHub size={24} />;
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
    <S.PageLayout>
      <Container>
        <ThemeSelector />
        <section>
          <S.ImageContainer>
            <S.Image
              src={basics?.picture ?? ''}
              height={225}
              width={180}
              alt={basics?.name ?? ''}
            />
          </S.ImageContainer>
          <S.Name>{basics.name}</S.Name>
          <S.Label>{basics.label}</S.Label>
          <p>{basics.summary}</p>
          <S.Divider />
          <S.Content>
            <S.Sidebar>
              <S.Download href="/2021_CC_RESUME.pdf" download>
                <Download size={32} />
                Download as PDF
              </S.Download>
              <S.SidebarItem>
                <Home size={24} />
                <span>{`${basics.location.city}, ${basics.location.region}, ${basics.location.countryCode}`}</span>
              </S.SidebarItem>
              <S.SidebarItem>
                <AtSign size={24} />
                <span>{basics.email}</span>
              </S.SidebarItem>
              {basics.profiles.map((profile) => (
                <S.SidebarItem key={profile.network}>
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    {getProfileIcon(profile.network)}
                    {profile.username}
                  </a>
                </S.SidebarItem>
              ))}
              <S.Divider small />
              <h3>Skills</h3>
              <dl>
                {skills.map((skill) => (
                  <Fragment key={skill.name}>
                    <S.SkillName>{skill.name}</S.SkillName>
                    <S.SkillValue>{skill.keywords.join(', ')}</S.SkillValue>
                  </Fragment>
                ))}
              </dl>
              <S.Divider small />
              <h3>Languages</h3>
              <dl>
                {languages.map((language) => (
                  <Fragment key={language.language}>
                    <S.SkillName>{language.language}</S.SkillName>
                    <S.SkillValue>{language.fluency}</S.SkillValue>
                  </Fragment>
                ))}
              </dl>
            </S.Sidebar>
            <S.Main>
              <section>
                <S.SectionTitle>Professional experience</S.SectionTitle>
                {work.map((work) => (
                  <WorkSnippet key={`${work.name}-${work.startDate}`} work={work} />
                ))}
              </section>
              <S.Divider small />
              <section>
                <S.SectionTitle>Education</S.SectionTitle>
                {education.map((education) => (
                  <EducationSnippet key={education.area} education={education} />
                ))}
              </section>
              <S.Divider small />
              <section>
                <S.SectionTitle>Projects</S.SectionTitle>
                {projects.map((project) => (
                  <ProjectSnippet key={project.organization} project={project} />
                ))}
              </section>
              <section>
                <S.SectionTitle>Volunteering</S.SectionTitle>
                {volunteer.map((project) => (
                  <ProjectSnippet key={project.organization} project={project} />
                ))}
              </section>
            </S.Main>
          </S.Content>
        </section>
      </Container>
    </S.PageLayout>
  );
};
