/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Support() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "support-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 990) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={{ variant: 'section.support' }} id="support">
      <Container>
        <SectionHeader
          title="Meet our support team who always work hardly behind the scenes"
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
    width: [360, '100%', null, null, 960, '100%'],
    img: {
      height: [180, 'auto'],
    },
  },
};
