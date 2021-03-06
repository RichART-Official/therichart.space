import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyles';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import removeLoader from '../lib/removeLoader';
import theme from '../styles/theme';

const { colors } = theme;

const Main = styled.main`
  min-height: 0vh;
  transition: 0.5 ease-in-out;
  background: ${props => (props.grayBg ? colors.bgLight : 'none')} !important;
  scroll-behavior: smooth;
  width: 100vw;
  overflow: hidden;
`;
const DefaultLayout = ({ children, gray }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          {removeLoader()}
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <Main grayBg={gray}>{children}</Main>
          <Footer />
          <GlobalStyle />
        </>
      </ThemeProvider>
    )}
  />
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
  gray: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  gray: true,
};
export default DefaultLayout;
