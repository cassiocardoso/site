import React from 'react';
import Helmet from 'react-helmet';

import {
  Layout,
  Wrapper,
  Header,
  Content,
  SectionTitle,
  QuestionList,
  Question,
} from '../components';
import config from '../../config/SiteConfig';
import { personSchema } from '../utils/jsonLd';
import PageProps from '../models/PageProps';

export default class AboutPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`About Me | ${config.siteTitle}`} />
        <script type="application/ld+json">{personSchema}</script>
        <Header>
          <SectionTitle>About Me</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <h2>Who am I</h2>
            <p>
              I’m a passionate and self-motivated front-end engineer with over eight years of
              experience. Throughout my career I had the chance to work on, lead and deliver
              projects of all sizes, from small internal tools to applications that are used by
              millions of people each month, I always strive to deliver the best user experience to
              the customer with a reliable, resilient and highly available solution.
            </p>
            <p>
              I’m flexible and adaptable, I don’t fall in love with any particular solution, I aim
              to understand everything I can about the problem and then figure out how to solve
              efficiently and elegantly, I’d rather fail fast and learn from it than keep banging my
              head against a brick wall.
            </p>
            <p>
              I believe sharing is one of the most important skills that one can have, both in the
              technical and the interpersonal side. It's a great growing tool as you can develop
              your skills, teach and learn from others as well as build a trusting and safe working
              environment.
            </p>
            <p>
              I love to learn, I’m constantly studying topics that aren’t my strongest skills, and
              this is not restricted to tech-related topics but also to finance, diet and nutrition,
              exercise and sports and other topics that I find interesting.
            </p>
            <h2>Where am I</h2>
            <p>
              I have been living in Berlin since November of 2018, when I joined{' '}
              <a href="https://omio.com">Omio</a> to work as a software engineer and help making
              travel easy for millions of people.
            </p>
            <h2>Previous Experiences</h2>
            <p>
              My first professional experience with web development came at{' '}
              <abbr title="Instituto Nacional de Pesquisas Espaciais">INPE</abbr> (Brazilian
              Institute for Space Research), where I was hired as a web developer in 2009 to work in
              the Brazilian space weather research program. During my time there I did back-end and
              front-end development.
            </p>
            <p>
              In 2014 I moved to São Paulo city to work at a fashion start-up called{' '}
              <a href="https://amaro.com">AMARO</a>, where I had the opportunity to do a lot of
              interesting projects as an individual contributor and later on, in a management role.
            </p>
            <p>
              I went from being the first and single front-end developer creating an entire
              front-end app for an e-commerce platform from scratch, to a team-lead managing a team
              of 4 developers.
            </p>
            <p>
              After three and a half years I left the company to take on a new challenge. I joined{' '}
              <a href="https://quintoandar.com.br">QuintoAndar</a> in November of 2017 where I
              helped making rental easy and cool for thousands of Brazilians.
            </p>
            <p>
              My main motivation to change job at the time was to grow technically and tackle
              different problems, and, while most of my daily work there was focused on front-end, I
              had the opportunity to do back-end and devOps tasks too which allowed me to improve a
              set of skills that I was looking forward to do.
            </p>
            <p>
              For a more detailed information, check my <a href="/resume">resume</a>.
            </p>
            <h2>Q&A</h2>
            <QuestionList>
              <Question title="Favorite hobby?">
                <p>
                  I like to watch various TV shows and movies, so I'm usually just hanging out at
                  home doing that or going to the movie theater. I also enjoy walking in the parks
                  nearby, usually listening to some podcast.
                </p>
              </Question>
              <Question title="Favorite team/sport?">
                <p>
                  I'm a sports guy. I played soccer my entire youth and did some other sports during
                  high school like volley and handball. I always enjoyed the feeling of being part
                  of a team, the competition and the adrenaline during the games.
                </p>
                <p>
                  In 2010 I founded a flag football team in my hometown called{' '}
                  <a href="https://facebook.com/bigdonkeys/">Taubaté Big Donkeys</a> this was a
                  great experience where I was able to make a lot of friends and collect awesome
                  memories.
                </p>
                <p>
                  Nowadays, my favorite sports are football (the american one) and soccer as a close
                  second. My favorite teams are S.E. Palmeiras and the Baltimore Ravens.
                </p>
              </Question>
              <Question title="Most beautiful place I visited?">
                <p>
                  This is hard to choose, but I would say that so far, it's the Vatican, and I'm not
                  even a catholic. It's just an incredible place, with thousands of years of
                  history, amazing architecture and the thought of it being a central place of our
                  history for such a long time, is incredible.
                </p>
              </Question>
              <Question title="Favorite musical style?">
                <p>
                  Rock 'n' roll, but I usually listen to everything from pop-rock to heavy metal,
                  really depends on the day and the mood at the time. My favorite bands of all-time
                  are The Beatles, Queen, and Linkin Park. Nowadays it's Muse and Imagine Dragons.
                </p>
                <p>
                  I also enjoy a lot of Brazilian music, from the national pop-rock, punk bands to{' '}
                  <abbr title="Música Popular Brasileira">MPB</abbr> (Brazilian popular music) and
                  some country music.
                </p>
                <p>
                  When I'm working out I prefer to listen to rap and hip-hop as I think they give an
                  extra motivation to go through the exercises.
                </p>
              </Question>
              <Question title="Favorite book?">
                <p>
                  The Harry Potter series. It marked my youth, I have many good memories of going to
                  the movie theater with my friends at midnight for the premiere of the new movie.
                </p>
                <p>
                  More recently, I read American Gods by Neil Gaiman and really enjoyed it. A very
                  interesting approach to compare the different kinds of worship during our history.
                </p>
              </Question>
              <Question title="Favorite game?">
                <p>
                  I'm a Pokémon fanatic. This is, by far, my favorite game series. Recently I bought
                  a Nintendo Switch to be able to play the newest games and I still enjoy it as much
                  as I did when I was a little kid.
                </p>
                <p>
                  Since this is the first time I have a Nintendo console, I'm looking forward
                  playing some of the exclusives that I never played before like the Mario and Zelda
                  series.
                </p>
              </Question>
            </QuestionList>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
