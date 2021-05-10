import { Link } from "gatsby"
import React from "react"
import { RiArrowRightFill, RiArticleFill, RiBookmarkFill } from "react-icons/ri"
import "./blog-post.less"
import "./tag.less"

const BlogPost = ({ title, name, date, descriptions, tags, hide }) => (
  <div className={`post ${hide ? "hide" : ""}`}>
    <span className="date">{date}</span>

    <Link to={`/article/${name}`}>
      <span className="title">{title}</span>
    </Link>

    <ul className="description">
      {descriptions.map(description => (
        <li key={description}>{description}</li>
      ))}
    </ul>
    <div className="bar">
      <section>
        <span className="pill">
          <RiArticleFill aria-label="Article Icon" size={17} />
          文章
        </span>
        <p className="tags">
          {tags.map(tag => (
            <Link
              key={tag}
              className={`tag ${tag.toLowerCase().replace(" ", "-")} pill`}
              to={`/?tag=${tag.toLowerCase().replace(" ", "-")}`}
            >
              <RiBookmarkFill aria-label="Tag Icon" size={17} />
              {tag}
            </Link>
          ))}
        </p>
      </section>

      <Link
        className="read-more"
        to={`/article/${name}`}
        aria-label="查看全文"
        title="查看全文"
        tabIndex="-1"
        aria-hidden="true"
      >
        <RiArrowRightFill aria-label="Open Article" size={24} />
      </Link>
    </div>
  </div>
)

export default BlogPost
