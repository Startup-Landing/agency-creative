/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function ClientFeedback() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "client-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 890) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={{ variant: 'section.feedback' }} id="feedback">
      <Container>
        <SectionHeader
          title="More than thousand of user we have worldwide with happy feedback"
          description="Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred."
        />

        <Box sx={styles.thumbWrapper}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    width: [366, '100%', null, null, 960, '100%'],
    mx: 'auto',
    img: {
      height: [100, 'auto'],
    },
  },
};
