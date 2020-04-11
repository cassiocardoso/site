import React, { Fragment, SyntheticEvent } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Linkedin, Send } from 'react-feather';

import { Layout, Wrapper, Header, Button, Content, SectionTitle } from '../components';

import config from '../../config/SiteConfig';
import theme from '../../config/Theme';
import PageProps from '../models/PageProps';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 520px;
`;

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 1rem;

  label {
    min-width: 90px;
  }

  input,
  textarea {
    min-width: 420px;
  }
`;

const Submit = styled(Button)`
  background-color: ${theme.colors.ceruleanBlue};
  justify-content: center;
`;

const FormFeedback = styled.div`
  margin: 4rem 0;
`;

const ButtonLink = styled(Link)`
	border-bottom: 0;

	&:hover {
		border-bottom: 0;
	}
`;

const LinkedInButton = styled(Button)`
  background-color: #0072b1; // LinkedIn blue
`;

const TelegramButton = styled(Button)`
  background-color: #08c; // Telegram blue
`;

type State = {
  status: 'idle' | 'success' | 'error';
};

export default class ContactPage extends React.Component<PageProps, State> {
  constructor(props: PageProps) {
    super(props);

    this.state = {
      status: 'idle',
    };
  }

  submitForm = (event: SyntheticEvent) => {
    event.preventDefault();
    // @ts-ignore
    const form: HTMLFormElement = event.currentTarget;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) {
        return;
      }

      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'success' });
      } else {
        this.setState({ status: 'error' });
      }
    };

    xhr.send(data);
  };

  private renderForm() {
    const { status } = this.state;

    switch (status) {
      case 'idle':
        return (
          <Fragment>
            <p>You can send me your message using the nice form below:</p>
            <Form onSubmit={this.submitForm} action="https://formspree.io/xvobadll" method="POST">
              <FormGroup>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </FormGroup>
              <FormGroup>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" cols={30} rows={6} />
              </FormGroup>
              <Submit type="submit" big>
                Send message
              </Submit>
            </Form>
          </Fragment>
        );
      case 'success':
        return (
          <FormFeedback>
            <h3>Thanks for your message!</h3>
            <p>I will get back to you as soon as possible. 😄</p>
          </FormFeedback>
        );
      case 'error':
        return (
          <FormFeedback>
            <h3>Oops, something went wrong.</h3>
            <p>Please, refresh the page and try again. Sorry for that. 😳</p>
          </FormFeedback>
        );
      default:
        return null;
    }
  }

  public render() {
    return (
      <Layout>
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Header>
          <SectionTitle>Contact</SectionTitle>
        </Header>
        <Wrapper>
          <Content>
            <h2>Hello stranger</h2>
            <p>
              You're here because you want to chat, but my mom always told me to not talk with
              strangers, that puts us in a difficult situation but I think we can make it work.
            </p>
            {this.renderForm()}
            <p>Or you can reach me through one of the methods below:</p>
            <div>
              <ButtonLink to="/test" target="_blank" rel="noopener noreferrer">
                <LinkedInButton big>
                  <Linkedin size={24} /> LinkedIn
                </LinkedInButton>
              </ButtonLink>
              <ButtonLink to="/test" target="_blank" rel="noopener noreferrer">
                <TelegramButton big>
                  <Send size={24} /> Telegram
                </TelegramButton>
              </ButtonLink>
            </div>
          </Content>
        </Wrapper>
      </Layout>
    );
  }
}
