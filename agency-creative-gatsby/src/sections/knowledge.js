/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const data = {
  title: 'we are committed to using fact-based knowledge to our customers',
  description:
    'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.',
  btnName: 'Explore Details',
  btnURL: '#',
};

export default function Knowledge() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "knowledge-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 630) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={{ variant: 'section.knowledge' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['flex-Start', null, null, 'space-between'],
    flexWrap: ['wrap', null, null, 'nowrap'],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: 'flex',
    mx: ['auto', null, null, 0],
    width: [338, '100%', null, null, 540, 730, 670, 760],
    img: {
      height: [400, 'auto'],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ['center', null, null, 'left'],
    width: ['100%', null, null, 365, 420, 430, '490px'],
    pb: [7, null, null, 0],
    '.description': {
      pr: [0, null, 7, 5],
    },
    '.btn__link': {
      mt: [5, null, null, 6],
    },
  },
};
