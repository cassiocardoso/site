import React from 'react';
import Helmet from 'react-helmet';

import { Layout, Wrapper, Header, Content, SectionTitle } from '../components';
import config from '../../config/SiteConfig';
import PageProps from '../models/PageProps';

export default class BucketListPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <Helmet title={`Bucket List | ${config.siteTitle}`} />
        <Header>
          <SectionTitle>Bucket List</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <h2>Sports</h2>
            <ul>
              <li>Go skiing/snowboarding</li>
              <li>Surf</li>
              <li>Stand Up Paddle</li>
              <li>Watch a Ravens game at M&T Bank Stadium</li>
              <li>Watch a Liverpool game at Anfield</li>
            </ul>
            <h2>Travel</h2>
            <ul>
              <li>
                Visit all 7 continents (Africa, Antarctica, Asia, Australia, <s>Europe</s>, North
                America, <s>South America</s>)
              </li>
              <li>Visit all Brazilian states</li>
              <li>
                Visit 100 countries (6 so far: <s>Brazil</s>, <s>Germany</s>, <s>Czech Republic</s>,{' '}
                <s>Italy</s>, <s>Portugal</s>, <s>Austria</s>)
              </li>
              <li>
                <s>Attend a beer festival</s> (Porto Beer Fest 2019)
              </li>
              <li>Take a sabbatical</li>
              <li>Climb a Volcano</li>
              <li>
                <s>See the Coliseum in Rome</s> (05/2019)
              </li>
              <li>
                <s>Visit the Sistine Chapel</s> (05/2019)
              </li>
              <li>Spend a night at the desert</li>
              <li>See the Northern Lights</li>
							<li>Visit the Tah Mahal</li>
              <li>Visit Yosemite National Park</li>
							<li>Visit Chichen Itza</li>
              <li>Walk in the Great Wall of China</li>
              <li>Visit Dracula's Castle in Romania</li>
							<li>Go to the ancient city of Petra</li>
              <li>See the Pyramid of Giza</li>
              <li>Walk across Abbey Road</li>
              <li>Hike the Inca Trail</li>
							<li>Visit Machu Picchu</li>
              <li>Float in the Dead Sea</li>
            </ul>
            <h2>Food</h2>
            <ul>
              <li>Have a dinner in each of the World's Best 50 Restaurants</li>
              <li>
                <s>Cook a beef Wellington</s> (New Year's Eve 2017)
              </li>
              <li>Cook every dish from a book</li>
              <li>Eat fondue in Switzerland</li>
            </ul>
            <h2>Personal</h2>
            <ul>
              <li>Reach german A2 level</li>
              <li>Build a snowman</li>
              <li>Have an emergency fund (12 months of bills saved)</li>
              <li>Be a millionaire</li>
            </ul>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
