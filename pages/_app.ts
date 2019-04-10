import App, { Container } from 'next/app';
import Title from '../components/_title';

type Props = {
  Component: any,
  pageProps: any,
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Title/>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp;