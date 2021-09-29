import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor() {
    super();
    this.state = {
      showList: [
        {
          id: 1, name: 'Planet Earth', host: 'David Attenborough', isInWatchlist: false
        },
        {
          id: 2, name: 'Planet Earth - II', host: 'David Attenborough', isInWatchlist: false
        },
        {
          id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchlist: false
        },
        {
          id: 4, name: 'IPL Cricket', host: 'Sourav Ganguly', isInWatchlist: false
        }
      ]
    }
  }

  handleAddToWatchlist = (index) => {
    console.log('inside handleAddToWatchlist');
    console.log(this);

    console.log(index);
    // working with state immutably
    let dupShowList = [...this.state.showList];
    dupShowList[index].isInWatchlist = !dupShowList[index].isInWatchlist;
    this.setState({
      showList: dupShowList
    });
  }

  render() {
    // ideal place for you to loop thru 
    // ideal place for the comp specific transformations in JSX
    // never ever change the state here

    let shows = null;
    if(this.state.showList && this.state.showList.length > 0){
      // looping thru using array map 
      shows = this.state.showList.map( (show, index) => {
        return(
          <li className="list-group-item" key={show.id}>
            #{show.id} {show.name} - hosted by {show.host}
            <button type="button"
              className="btn btn-success float-end"
              onClick={this.handleAddToWatchlist.bind(this, index)}>
              { show.isInWatchlist? 'In Watchlist': 'Add to Watchlist'}
            </button>
          </li>
        )
      });
    }

    return (
      <div>
        <h2>Trending Shows - Lists and Keys - Conditionals - Demo</h2>

        <div className="card">
          <ul className="list-group list-group-flush">
            {/* Conditionals */}
            {
              (this.state.showList && this.state.showList.length > 0) ?
                shows
                :
                <div className="alert alert-danger">No Trending Shows Found</div>
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default TrendingShows;