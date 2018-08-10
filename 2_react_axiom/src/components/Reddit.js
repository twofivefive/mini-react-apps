import React, { Component } from 'react';
import axios from 'axios';
import './css/reddit.css';

class Reddit extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
      const posts = res.data.data.children.map(obj => obj.data);
      this.setState({ posts });
    });
  }

  render() {

    return (
      <div className="reddit">
        <header className="subreddit">
          <div className="subreddit__details">
            <h1>/r/reactjs</h1>
          </div>
        </header>
        <div className="posts">
          <ul>
            {this.state.posts.map(post => 
              <li key={post.id} className="post">
                <a href={post.url} className="post__title"><h2>{post.title}</h2></a>
                <p className="post__details">posted by: {post.author}</p>
                <span className="post__score">👍 {post.ups} | 👎 {post.downs}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Reddit;
