import React, { Component } from 'react';
import {playAction, nextAction, stopAction} from './actions'
import {connect} from 'redux-zero/react'
import logo from './logo.svg';
import './App.css';
// import model from './store';

const View=({title,model})=>{
  //  const songList = songs.map((song, index) =>(
  //     <li key = {index} className={ selectedSong == index ? 'current': ''} > {song.artist} - {song.title}  - {song.duration} </li>))
    return (
      //  <div>
      //     <h1>Treetunes</h1>

      //     <ol id="playlist">
      //        {songList}
      //     </ol>
      //     <button id="play" onClick={playAction}>Play</button>
      //     <button id="next" onClick={nextAction}>Next</button>
      //     <button id="stop" onClick={stopAction}>Stop</button>

      //  </div>

      <div className="wrapper">
      
        <header>
          <p> Nuevo Comentario </p>
          <form onSubmit={(e)=>{e.preventDefault(); model.addName()}}>
            <input type="text" placeholder="User" />      
            <input type="text" placeholder="Comment" />
            <button type="submit">Post Comment</button>
          </form>         
        </header>
        <div className="main">	
          <h2>Comments</h2>
          {/* <p>{model.guests.length}</p>
          <Guests model={model}/> */}
        </div>
      </div>
    );
  }

const mapToProps = ({songs, selectedSong}) => ({songs, selectedSong})

export default connect(mapToProps) (View);
