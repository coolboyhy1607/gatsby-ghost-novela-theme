import React from "react";
import styled from "@emotion/styled";

import Section from "@components/Section";
import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";

import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";

import { Template, IAuthor } from "@types";
import { MetaData } from "@components/meta";
import mediaqueries from "@styles/media";
import Subscription from "@components/Subscription";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;

  return (
    <Layout>
      <MetaData location={location} />
      {/* <SEO pathname={location.pathname} /> */}
      <ArticlesHero />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <SubscriptionMargin show={pageContext.pageCount == 1}>
      <Subscription
        home="true"
      />
      </SubscriptionMargin>
      <ArticlesGradient />
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 590px;
  z-index: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.gradient};
  transition: ${(p) => p.theme.colorModeTransition};
`;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${(p) => p.show && `margin-top: 95px; margin-bottom: 50px;`}

  ${mediaqueries.phablet`
      margin-top: 0;
      display: flex;
      justify-content: center;
    `};
`;

const SubscriptionMargin = styled.div<{show: boolean}>`
  ${(p) => p.show && `margin-top: 80px;`}

  ${mediaqueries.tablet`
    margin-top:50px;
  `}
`;
