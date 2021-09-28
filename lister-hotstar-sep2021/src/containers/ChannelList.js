import React, { Component } from 'react'
import Channel from '../components/Channel';

class ChannelList extends Component {

  // we can have data within comp in state
  // Do not mutate state directly. Use setState()
  // Mutating the state directly will not re-render.
  // Mutating the state using setState() will re-render
  state = { 
    tvChannelList: [
      {
        name: 'Star Sports', 
        category: 'Sports', 
        desc: '#1 Sports Channel in India', 
        imgURL: 'https://via.placeholder.com/260x180'
      },
      {
        name: 'Discovery Channel', 
        category: 'Infotainment', 
        desc: '#1 Infotainment Channel in India', 
        imgURL: 'https://via.placeholder.com/260x180'
      },
      {
        name: 'BBC Earth', 
        category: 'Infotainment', 
        desc: 'Best Infotainment Channel', 
        imgURL: 'https://via.placeholder.com/260x180'
      }
    ],
    tvChannelsCount: 3
  }

  handleAddChannel = () => {
    this.setState({
      tvChannelsCount: this.state.tvChannelsCount + 1
    });
  }

  handleAddToFav = () => {
    this.setState( {
      tvChannelList: [
        {
          name: 'Star Sports [Added]', 
          category: 'Sports', 
          desc: '#1 Sports Channel in India', 
          imgURL: 'https://via.placeholder.com/260x180'
        },
        {
          name: 'Discovery Channel', 
          category: 'Infotainment', 
          desc: '#1 Infotainment Channel in India', 
          imgURL: 'https://via.placeholder.com/260x180'
        },
        {
          name: 'BBC Earth', 
          category: 'Infotainment', 
          desc: 'Best Infotainment Channel', 
          imgURL: 'https://via.placeholder.com/260x180'
        }
      ]
    });
  }

  render() {
    console.log('Inside Render');
    return (
      <div className="row">
        <h2>Channel List | States and Events Demo</h2>

        <h4>Total TV Channels: {this.state.tvChannelsCount}</h4>

        <button type="button" 
          onClick={this.handleAddChannel} 
          className="btn btn-primary">Add 1 More Channel</button>

        <Channel 
          name={this.state.tvChannelList[0].name} 
          category={this.state.tvChannelList[0].category}
          imagePath={this.state.tvChannelList[0].imgURL}
          addToFav={this.handleAddToFav}>
            {this.state.tvChannelList[0].desc}
        </Channel>

        <Channel 
          name={this.state.tvChannelList[1].name} 
          category={this.state.tvChannelList[1].category}
          imagePath={this.state.tvChannelList[1].imgURL}>
            {this.state.tvChannelList[1].desc}
        </Channel>

        <Channel 
          name={this.state.tvChannelList[2].name} 
          category={this.state.tvChannelList[2].category}
          imagePath={this.state.tvChannelList[2].imgURL}>
            {this.state.tvChannelList[2].desc}
        </Channel>

      </div>
    )
  }
}

export default ChannelList;