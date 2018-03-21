import React, { Component } from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    };
  }

  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = BASE_URL + 'q=' +
      this.state.query+'&type=artist&limit=1';
    const ALBUM_URL = 'https://api.spotify.com/v1/artists';

    fetch(FETCH_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer BQDx8eV4D1CF0N0xljiZDSAh_pAnIjIgFRRIRxvZjdOrkOfDXtStZVFY76RhkhOwHGi0kGyK-3QRN_lhLp6b1DfWEguw7IQYF1p65DGR7B3p5a4vMc4HpF362iotKD1Jo-U1Bvq9H9T-DCwNK7IWwEUAT0jwEQ'
      }
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({artist});

      const TRACKS_URL = ALBUM_URL + '/' + artist.id + '/top-tracks?country=US&';
      fetch(TRACKS_URL, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer BQDx8eV4D1CF0N0xljiZDSAh_pAnIjIgFRRIRxvZjdOrkOfDXtStZVFY76RhkhOwHGi0kGyK-3QRN_lhLp6b1DfWEguw7IQYF1p65DGR7B3p5a4vMc4HpF362iotKD1Jo-U1Bvq9H9T-DCwNK7IWwEUAT0jwEQ'
        }
      })
      .then(response => response.json())
      .then(json => {        
        const { tracks } = json;
        this.setState({tracks});
      });
    })
    .catch(error => console.error('error', error));
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Music Master from App
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              query={this.state.query}
              onChange={event => {this.setState({query: event.target.value});}}
              onKeyPress={event => {
                if(event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()} >
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null ?
          <div>
            <Profile
              artist={this.state.artist}
            />
            <Gallery 
              tracks={this.state.tracks}
            />
          </div>
          : <div></div>
        }       
      </div>
    )
  }
}

export default App;