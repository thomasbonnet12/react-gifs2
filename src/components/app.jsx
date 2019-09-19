import React, { Component } from "react";
import giphy from "giphy-api";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

const giphy_api = "oH9rEFnSQPyNjLPuAxmDkLp3ykcIgiNV";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT5LMHxhOfscxPfIfm"
    }
  }

  search = (query) => {
      giphy({apiKey: giphy_api, https: true}).search({
    q: query,
    rating: 'g',
    limit: 10
}, (error, result) => {
    this.setState({
      gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
