import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {
  AtSign,
  Codepen,
  Download,
  Facebook,
  GitHub,
  Globe,
  Hash,
  Home,
  Instagram,
  Linkedin,
  MessageSquare,
  Send,
  Twitter,
  User,
} from 'react-feather';

import { Layout, Wrapper, Button, Header, Content } from '../components';
import config from '../../config/SiteConfig';
import theme from '../../config/Theme';
import { mediaV2 } from '../utils/media';
import { personSchema } from '../utils/jsonLd';
import PageProps from '../models/PageProps';
import { Resume } from '../models/Resume';

const DownloadLink = styled.a`
	border-bottom: 0;

	&:hover {
		border-bottom: 0;
	}
`;

const DownloadButton = styled(Button)`
  background-color: ${theme.colors.ceruleanBlue};
  color: ${theme.colors.icyWhite};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  clip-path: circle(70px at center 70px);
	margin: 0;

  @media ${mediaV2.desktop} {
  	margin: -120px 0 0;
  }
`;

const JobTitle = styled.h3`
  color: ${theme.colors.pewterGray};
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
`;

const Divider = styled.hr`
  color: ${theme.colors.pewterGray};
  height: ${({ small }: DividerProps) => (small ? '2px' : '3px')};
  margin: 0 auto 1.75rem;
  width: ${({ small }: DividerProps) => (small ? '60px' : '80px')};
`;

const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media ${mediaV2.desktop} {
	  grid-template-columns: 1fr 2fr;
  	grid-gap: 1rem;
  }
`;

const Sidebar = styled.aside`
  color: ${theme.colors.pewterGray};
  font-size: 0.9rem;
`;

const SidebarItem = styled.div`
  display: flex;
  margin-bottom: 1.1rem;

  svg {
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
  }
`;

const SkillName = styled.p`
  color: ${theme.colors.gray.dark};
  margin-bottom: 0.5rem;
`;

const Main = styled.main``;

const Snippet = styled.div`
  margin-bottom: 2.5rem;

  h4 {
    color: ${theme.colors.pewterGray};
    margin-bottom: 0.5rem;

    small {
      font-family: 'Open Sans', sans-serif;
      font-size: 0.75rem;
      font-style: italic;
      margin-left: 0.5rem;
    }
  }

  div {
    margin-bottom: 0.5rem;
  }

  p {
    align-content: center;
    display: flex;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  ul {
    font-size: 0.9rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;

const IconWrapper = styled.span`
  align-items: center;
  display: flex;
  margin-right: 0.5rem;
`;

type DividerProps = {
  small?: boolean;
};

type State = {
  data: Resume | null;
};

export default class ResumePage extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount(): Promise<any> {
    const data = await fetch(
      'https://raw.githubusercontent.com/cassiocardoso/resume/master/resume.json',
    ).then(res => res.json());

    console.log('DATA::', data);

    this.setState({ data });
  }

  private static getProfileIcon(network: string): React.ReactElement | null {
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
  }

  public render() {
    const { data } = this.state;

    return (
      <Layout>
				<Helmet title={`Resume | ${config.siteTitle}`}>
					<script type="application/ld+json">
						{personSchema}
					</script>
				</Helmet>
        <Header />
        <Wrapper>
          <Content>
            {!data ? (
              <p>loading...</p>
            ) : (
              <Fragment>
                <ImageContainer>
                  <Image src={data.basics.picture} alt="That's me" />
                </ImageContainer>
                <h2>{data.basics.name}</h2>
                <JobTitle>{data.basics.label}</JobTitle>
                <p>{data.basics.summary}</p>
                <Divider />
                <ResumeContent>
                  <Sidebar>
                    <SidebarItem>
                      <Home size={24} />
                      <p>{`${data.basics.location.city}, ${data.basics.location.region}, ${data.basics.location.countryCode}`}</p>
                    </SidebarItem>
                    <SidebarItem>
                      <AtSign size={24} />
                      <p>{data.basics.email}</p>
                    </SidebarItem>
                    {data.basics.profiles.map(profile => (
                      <SidebarItem key={profile.network}>
                        {ResumePage.getProfileIcon(profile.network)}
                        <a href={profile.url} target="_blank" rel="noopener noreferrer">
                          {profile.username}
                        </a>
                      </SidebarItem>
                    ))}
                    <Divider small />
                    <h3>Skills</h3>
                    {data.skills.map(skill => (
                      <Fragment key={skill.name}>
                        <SkillName>{skill.name}</SkillName>
                        <p>{skill.keywords.join(', ')}</p>
                      </Fragment>
                    ))}
                    <Divider small />
                    <h3>Languages</h3>
                    <dl>
                      {data.languages.map(language => (
                        <Fragment key={language.language}>
                          <SkillName>{language.language}</SkillName>
                          <dd>{language.fluency}</dd>
                        </Fragment>
                      ))}
                    </dl>
                  </Sidebar>
                  <Main>
                    <section>
                      <h3>Professional experience</h3>
                      {data.work.map(work => (
                        <Snippet key={`${work.name}-${work.startDate}`}>
                          <h4>
                            {work.name}{' '}
                            <small>
                              {work.startDate} - {work.endDate}
                            </small>
                          </h4>
                          <div>
                            <p>
                              <IconWrapper>
                                <Globe size={20} />
                              </IconWrapper>
                              <IconWrapper>
                                <a href={work.url} target="_blank" rel="noopener noreferrer">
                                  {work.url}
                                </a>
                              </IconWrapper>
                            </p>
                            <p>
                              <IconWrapper>
                                <Home size={20} />
                              </IconWrapper>
                              <span>{work.location}</span>
                            </p>
                            <p>
                              <IconWrapper>
                                <User size={20} />
                              </IconWrapper>
                              <span>{work.position}</span>
                            </p>
                          </div>
                          <p>{work.summary}</p>
                          <p>Highlights:</p>
                          <ul>
                            {work.highlights.map(highlight => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </Snippet>
                      ))}
                    </section>
                    <Divider small />
                    <section>
                      <h3>Volunteering</h3>
                      {data.volunteer.map(vol => (
                        <Snippet key={vol.organization}>
                          <h4>
                            {vol.organization}{' '}
                            <small>
                              {vol.startDate} - {vol.endDate}
                            </small>
                          </h4>
                          <p>
                            <IconWrapper>
                              <Globe size={20} />
                            </IconWrapper>
                            <IconWrapper>
                              <a href={vol.website} target="_blank" rel="noopener noreferrer">
                                {vol.website}
                              </a>
                            </IconWrapper>
                          </p>
                          <p>
                            <IconWrapper>
                              <User size={20} />
                            </IconWrapper>
                            <span>{vol.position}</span>
                          </p>
                          <p>{vol.summary}</p>
                          <p>Highlights:</p>
                          <ul>
                            {vol.highlights.map(highlight => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </Snippet>
                      ))}
                    </section>
                    <Divider small />
                    <section>
                      <h3>Education</h3>
                      {data.education.map(ed => (
                        <Snippet key={ed.area}>
                          <h4>
                            {ed.area} <small>Graduated in {ed.endDate.split('-')[0]}</small>
                          </h4>
                          <p>
                            <IconWrapper>
                              <Home size={20} />
                            </IconWrapper>
                            <span>{ed.institution}</span>
                          </p>
                        </Snippet>
                      ))}
                    </section>
                    <Divider small />
                    <section>
                      <h3>Projects</h3>
                      {data.projects.map(project => (
                        <Snippet key={project.organization}>
                          <h4>
                            {project.organization} <small>{project.startDate.split('-')[0]}</small>
                          </h4>
                          <p>
                            <IconWrapper>
                              <Globe size={20} />
                            </IconWrapper>
                            <IconWrapper>
                              <a href={project.website} target="_blank" rel="noopener noreferrer">
                                {project.website}
                              </a>
                            </IconWrapper>
                          </p>
                          <p>
                            <IconWrapper>
                              <User size={20} />
                            </IconWrapper>
                            <span>{project.position}</span>
                          </p>
                          <p>{project.summary}</p>
                          <p>Highlights:</p>
                          <ul>
                            {project.highlights.map(highlight => (
                              <li key={highlight}>{highlight}</li>
                            ))}
                          </ul>
                        </Snippet>
                      ))}
                    </section>
                  </Main>
                </ResumeContent>
              </Fragment>
            )}
            <DownloadLink href="/assets/Cassio_Cardoso>Resume.pdf" download>
              <DownloadButton big>
                <Download size={24} /> Download as PDF
              </DownloadButton>
            </DownloadLink>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
