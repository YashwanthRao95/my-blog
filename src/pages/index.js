import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <main>
    <h1 style={{ color: "#663399", textAlign: "center" }}>Welcome to My Blog</h1>
    <p>Hello, I'm [Your Name], and this is my personal blog. Here, I share my thoughts on technology, programming, and more.</p>
    <div>
      <Link to="/about">Learn more about me</Link>
    </div>
  </main>
)

export default IndexPage
