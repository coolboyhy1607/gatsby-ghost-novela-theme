import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

export const Figure = styled.figure`
  line-height: 1.756;
  font-size: 18px;
  color: ${(p) => p.theme.colors.articleText};
  font-family: ${(p) => p.theme.fonts.sansSerif};
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto 35px;
  width: 100%;
  max-width: 680px;

  b {
    font-weight: var(--system-font-bold);
  }

  ${mediaqueries.desktop`
  max-width: 680px;
`}

  ${mediaqueries.tablet`
  max-width: 486px;
  margin: 0 auto 25px;
`};

  ${mediaqueries.phablet`
  padding: 0 20px;
`};

  * {
    margin: auto;
  }
`;

export default Figure;
