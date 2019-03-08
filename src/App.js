import React, { Component } from "react";
import { quotes } from "./components/quotes.js";
import { colors } from "./components/colors.js";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: colors[0],
      quote: quotes[0].quote,
      author: quotes[0].author,
      anime: quotes[0].anime
    };
  }
  getStyle = prop => {
    return {
      [prop]: this.state.color
    };
  };
  getRandom = n => {
    return Math.floor(Math.random() * n);
  };

  onClick = e => {
    let randomColors = this.getRandom(colors.length);
    let randomQuotes = this.getRandom(quotes.length);

    this.setState({
      color: colors[randomColors],
      quote: quotes[randomQuotes].quote,
      author: quotes[randomQuotes].author,
      anime: quotes[randomQuotes].anime
    });
  };
  twitterPost = () => {
    return (
      "https://twitter.com/intent/tweet?hashtags=quotes&text=" +
      this.state.quote +
      " - " +
      this.state.author +
      "/" +
      this.state.anime +
      " -- From Anime Quote Generator"
    );
  };
  tumblrPost = () => {
    return (
      "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=" +
      this.state.quote +
      " - " +
      this.state.author +
      "/" +
      this.state.anime +
      " -- From Anime Quote Generator" +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
    );
  };

  render() {
    return (
      <div id="wrapper" style={this.getStyle("background")}>
        <div id="quote-box">
          <div className="quote-wrapper" style={this.getStyle("color")}>
            <div id="text">
              <i className="fa fa-quote-left" id="quoteicon" />
              <span>{this.state.quote}</span>
            </div>
            <div id="author">
              <span>{this.state.author}</span>
              <span>
                <small>from</small> {this.state.anime}
              </span>
            </div>
          </div>

          <div className="btn-wrapper">
            <a
              href={this.twitterPost()}
              rel="noopener noreferrer"
              target="_blank"
              id="tweet-quote"
              className="btn"
              style={this.getStyle("background")}
            >
              <i className="btn fab fa-twitter" />
            </a>
            <a
              href={this.tumblrPost()}
              target="_blank"
              rel="noopener noreferrer"
              id="tumblr-quote"
              className="btn"
              style={this.getStyle("background")}
            >
              <i className="btn fab fa-tumblr" />
            </a>
            <a href="#!" id="new-quote" className="btn" onClick={this.onClick}>
              <span className="btn-text" style={this.getStyle("background")}>
                new quote
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
