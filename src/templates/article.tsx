import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import ReactDOMServer from "react-dom/server"
import { Helmet } from "react-helmet"
import { RiCalendarLine, RiCopyrightLine } from "react-icons/ri"
import Article from "../components/article/Article"
import ArticleBar from "../components/article/Bar"
import ArticleComment from "../components/article/Comment"
import ArticleMeta from "../components/article/Meta"
import Header from "../components/Header"

const ArticlePage = ({ data }: ArticlePageGraphQL) => {
  const post = data.markdownRemark
  const frontmatter = post.frontmatter
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "zh-hans",
        }}
      >
        <title>{frontmatter.title} | 记录干杯</title>
        <meta name="description" content={frontmatter.description}></meta>
      </Helmet>
      <Header>
        <ArticleBar toc={post.tableOfContents} />
      </Header>
      <Article {...frontmatter}>
        {ReactDOMServer.renderToString(<ArticleMeta {...frontmatter} />) +
          post.html.split("</h1>")[1]}
      </Article>
      <ArticleComment />
    </>
  )
}

export default ArticlePage

export const PostQuery = graphql`
  query BlogArticleQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        name
        description
        date(formatString: "YYYY 年 M 月 D 日")
        create_date(formatString: "YYYY 年 M 月 D 日")
        license
      }
      tableOfContents(absolute: false, maxDepth: 3)
    }
  }
`
