import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { animated } from 'react-spring';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/defaultLayout';
import SEO from '../components/seo';
import theme from '../styles/theme';
import Socials from '../components/socials';
import MinimalList, { generateList } from '../components/minimalList';
import Container from '../components/container';

const { mediaQueries, colors } = theme;

const CVGrid = styled(animated.div)`
  display: flex;
  padding: 3em 1em;
  flex-direction: column;
  justify-self: center;
  align-content: center;
  @media ${mediaQueries.xs} {
    display: grid;
    grid-template-columns: 3fr 3fr;
    padding: 5vw;
    grid-gap: 0 2em;
  }
  @media ${mediaQueries.sm} {
    padding: 10vh 15vw;

  }
  @media ${mediaQueries.md} {

  }
`;


const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${mediaQueries.xs}{
    & > * {
      margin: 7vh 0;
    }
  }

  @media ${mediaQueries.md}{
    & > * {
      margin: 7vh 5vw;
    }
  }
  @media ${mediaQueries.md}{
    & > * {
      margin: 7vh 10vw;
    }
  }
`;

const Header = styled.header`
  overflow: hidden;
  height: 100vh;
  max-height: 50em;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 5vh;
  height: 100vh;
  @media ${mediaQueries.xs} {
    padding: 0;
    height: 90vh;
    min-height: 40em;
    max-height: none;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 2fr 2fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2em;
    &:before {
      content: '';
      position: absolute;
      width: 90vw;
      height: 80vh;
      background: ${colors.yellow};
      top: 5vh;
      left: 5vw;
      opacity: 0.1;
    }
  }
  @media ${mediaQueries.lg} {
    margin: 0 5vw;
    margin-bottom: 10vh;
  }
`;

const PositionedSocials = styled(Socials)`
  grid-column: 1;
  background: red;
`;

const GridImg = styled(Img)`
display: none;
@media ${mediaQueries.xs} {
  display: block;
}
`;

const Img1 = styled(GridImg)`
grid-row: 2/5;
grid-column: 2/7;
`;
const Img2 = styled(GridImg)`
grid-row: 3/6;
grid-column: 6/10;
`;
const Img3 = styled(GridImg)`
grid-row: 1/3;
grid-column: 9/11;
`;
const Img4 = styled(Img)`
width: 100vw;
height: 100vh;
@media ${mediaQueries.xs}{
  width: auto;
  height: auto;
  grid-row: 4/6;
  grid-column: 1/3;
}
`;
const Title = styled.h2`
margin: 3.33em 1em;
align-self: flex-end;
bottom: 0;
right: 0;
position: absolute;
color: ${colors.white};
@media ${mediaQueries.xs} {
  margin: 0;
  color: ${colors.textDark};
  position: relative;
  grid-row: 1;
  grid-column: 5/10;
  z-index: 5;
  width: 100%;
  transform: translateY(50%);
  font-size: 5rem;
}
@media ${mediaQueries.lg} {
  font-size: 10rem;
  transform: translateY(33%);
}`;

const Tools = styled.div`
opacity: 0.3;
margin: 10vh 0em;
justify-self: center;
  h6 {
    font-size: 1.11rem;
    color: ${colors.primairy};
  }
  ul {
    li {
      color: ${colors.primairy};
    }
  }
  @media ${mediaQueries.xs} {
    margin: 0em;
  }
`;

const About = ({ data }) => {
  const developmentTools = [
    'HTML5',
    'CSS3 (SASS)',
    'Javascript (ES6',
    'Python',
    'Processing',
    'NodeJS',
    'React',
    'ESlint',
    'P5js',
    'GatsbyJS',
    'Lottie',
    'Git (Github/GitLab',
    'Postman',
    'TravisCI',
    'Google Firebase',
  ];
  const designTools = [
    'Photoshop',
    'Illustrator',
    'InDesign',
    'Sketch',
    'Invision',
    'Premiere Pro',
    'After Effects',
    'Logic Pro X',
    'Davinci Resolve',
    'Resolume Arena',
  ];

  return (
    <DefaultLayout gray>
      <SEO title="About" />
      <Header className="header">
        <Img1 fluid={data.image1.childImageSharp.fluid} />
        <Img2 fluid={data.image2.childImageSharp.fluid} />
        <Img3 fluid={data.image3.childImageSharp.fluid} />
        <Img4 fluid={data.image4.childImageSharp.fluid} />
        <Title>
I am
          <br />
Richard
        </Title>
        {/* <CallToAction onClick={handleClick}>
          <CallToActionContent>
            <Eye />
            <ActionText className="small">Learn more</ActionText>
          </CallToActionContent>
          <ArrowDown />
        </CallToAction> */}
        {/* <BackgroundAnimation options={defaultOptions/> */}
      </Header>
      <Container id="about-content">
        <TextSection>
          <h3>
            Richard van &apos;t Hof is a Rotterdam based audiovisual maker and digital artist.
            His work is on the verge of film, design and code. He is fascinated by it&apos;s
            emersive quality. His work focuses much on the question of this control. Especially
            in the question of how much control he can have over his surroundings and other
            people but also himself.
          </h3>
        </TextSection>
        <TextSection>
          <h3>
          He works with an autonimous, theoretical mindset to disect subjects around him
          from which he can gain unexpected insights. With these connections he plays
          visually. In this he likes to mix the analog and digital in his work.
          </h3>
        </TextSection>
        <TextSection>
          <h3>
          This is why he has been focussing more on programming the last few years. The
          digital world envelops us more and more, also in the real world. This creates
          a canvas that not only involves the digital but also the real. He is currently
          trying to find his voice in this digital world.
          </h3>
        </TextSection>
      </Container>
      <Container>
        <CVGrid>
          <div>
            <p className="big light">
                Richard currently studies audiovisual design at the Willem de Kooning Academy.
                Since 2017 he is also active at Bytecode Digital Agency where he designs
                branding, concepts, user expericences and does front-end development.
            </p>
            <PositionedSocials />
          </div>
          <Tools>
            <h6>Current Tools</h6>
            <MinimalList columns={2}>
              {generateList(developmentTools)}
            </MinimalList>
            <MinimalList columns={2}>
              {generateList(designTools)}
            </MinimalList>
          </Tools>
        </CVGrid>
      </Container>
    </DefaultLayout>
  );
};

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`;

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "headers/Richard/landscape.jpg" }) {
      ...squareImage
    }

    image2: file(relativePath: { eq: "headers/Richard/img029.jpeg" }) {
      ...squareImage
    }

    image3: file(relativePath: { eq: "headers/Richard/img031.jpeg" }) {
      ...squareImage
    }

    image4: file(relativePath: { eq: "headers/Richard/img030.jpeg" }) {
      ...squareImage
    }
  }
`;

About.propTypes = {
  data: PropTypes.shape({
    image1: PropTypes.object.isRequired,
    image2: PropTypes.object.isRequired,
    image3: PropTypes.object.isRequired,
    image4: PropTypes.object.isRequired,
  }).isRequired,
};

export default About;
