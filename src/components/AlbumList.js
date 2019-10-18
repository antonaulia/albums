import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native'
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

export class AlbumList extends Component {
  state ={
    albums :[]
  }

  componentDidMount(){
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then((res)=>{
      console.log(res.data)
      this.setState({albums:res.data})
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }

  renderAlbums =() =>{
    return this.state.albums.map((album,index)=>{
      return <AlbumDetail key={index} album={album}/>
    })
  }

  render() {
    return (
      <ScrollView>
        {/* <Text>Ini Album List test !!!</Text> */}
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
