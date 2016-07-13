
import React, {Component} from 'react';
import {render} from 'react-dom';
import _ from 'lodash';
const API_KEY = 'AIzaSyDieNpljtZPPiEcV54_nkmiF_QGl2knnEw';
import '../style.css';
import utube from 'youtube-api-search';

import SearchBar from './Component/SearchBar'
import VideoList from './Component/VideoList';
import VideoDetail from './Component/VideoDetail';
class App extends Component{
    constructor(){
        super();
        this.state = {
            videos:[],
            selectedVid : null
        };
        this.videoSearch('Reactjs is Awesome');
    }
    videoSearch(term){
        utube( {key: API_KEY, term: term} , (videos)=>{
            this.setState({
                videos: videos,
                selectedVid: videos[0]
            });
        });
    }
    render() {
        const getVid = _.debounce(term=>this.videoSearch(term),300);
        return (
            <div>
                <SearchBar onSearchTermChange = {getVid}/>
                <VideoDetail video={this.state.selectedVid} />
                <VideoList 
                    videos = {this.state.videos}
                    onSelectVid = {
                        (selectedVid)=>{
                            this.setState({selectedVid})
                        }
                    } 
                />
            </div>
        );
    }
};

render(<App/>,document.getElementById('app'));

/*
    const getVid is only gonna delay videosearch function by 300ms
    videosearch() function is passed on onSearchTermChange functional expression 

*/