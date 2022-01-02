import React, { Component } from "react";

class BlogPosts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.fetchBlogPosts();
  }

  render() {
    if (this.state.posts) {
      return <div>{this.renderPosts()}</div>;
    } else {
      return <h1>Loading...</h1>;
    }
  }

  renderPosts() {
    const posts = this.state.posts.map((post) => {
      const date = new Date(post.pubDate);
      return (
        <li
          className="flex-horizontal blog-line-item"
          onClick={() => this.handleClick(post.link)}
          key={post.guid}
        >
          <div>
            <img
              className="blog-thumbnail"
              src={post.thumbnail}
              alt="blog-thumbnail"
            ></img>
          </div>
          <div>
            <h2>{post.title}</h2>
            <p>{date.toDateString()}</p>
          </div>
        </li>
      );
    });

    return <ul>{posts}</ul>;
  }

  handleClick(link) {
    window.open(link);
  }

  fetchBlogPosts() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40cameronjameskingsley&api_key=i04qkl8ivtozytrcqqpbitvzx17zfgyubfkeyluk"
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          posts: json.items,
        });
      });
  }
}

export default BlogPosts;
