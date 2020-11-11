import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import PostList from "../components/postlist"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import "../styles/layout.less"

const IndexPage = () => (
  <>
    <a href="#content" className="skip-link">
      Skip to main content | 跳转到主要内容
    </a>
    <SEO title="Home" />
    <Header app aside title="记录干杯" />
    <main>
      <Sidebar>
        <section className="about" id="about">
          <h3>
            <span role="img" aria-label="Hi">
              👋🏻
            </span>{" "}
            Hi，
          </h3>
          <p>
            这是我的个人网站「 记录干杯
            」，我会在这里记录一些技术相关的文章和想法，尝试一些新的技术。
          </p>
          <p>
            我比较感兴趣的方向是 Web 前端，喜欢好看的设计，目前正在尝试使用
            TypeScript 和非 Web 技术做一些东西。
          </p>
          <p>
            在
            <a
              href="https://github.com/Lifeni"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;GitHub&nbsp;
            </a>
            上可以找到我和我的项目，以及关于我的其他信息。
          </p>
          <p>
            还有，「{" "}
            <a
              href="https://blog.bluebonnet27.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="friend"
            >
              bluebonnet27
            </a>{" "}
            」和「{" "}
            <a
              href="https://tanakarino.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="friend"
            >
              Nanako
            </a>{" "}
            」都是我的朋友，有时间可以去他们的网站看一看。
            {/* 当然，也可以来我的「 实验室 」玩玩。 */}
          </p>
        </section>
      </Sidebar>
      <div className="container">
        <PostList />
        <Footer />
      </div>
    </main>
  </>
)

export default IndexPage
