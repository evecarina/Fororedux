import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { addList,deleteList } from './actions';
import { connect } from "redux-zero/react";
const App = ({ list }) => {
  const onClick = e =>{
    e.preventDefault();
    console.log(e.target.id);
    deleteList(e.target.id);
  };
  const listsComments = list.map((item, index) => {
    return (      
        <div class="row">
          <div class="col-sm-1" >
            <img
              src="https://images.vexels.com/media/users/3/136210/isolated/preview/c0d96b3f3ccd1bd4d1e103bff6da70fe-casa-ronda-icono-con-sombra-by-vexels.png"
              className="image"
            />
          </div>
          <div class="col-sm-3" >
            {item.name}
            <hr/>
            {item.comment}
            <div>
              <button onClick={onClick} id={index}>Delete comment</button>
            </div>
          </div>
        </div>
 
    );
  });
  const onSubmit = e => {
    e.preventDefault();
    let user = this.inputName.value;
    let opinion = this.textComent.value
    addList(user,opinion);
  };

  return (
    <div className="container">   
      <div className="row">
        <form class="form" onSubmit={onSubmit}>
        <p class="comment">New Commnt</p>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="users"
            ref={e => (this.inputName = e)}
          />
          <textarea
            className="form-control"
            rows="4"
            id="comment"
            placeholder="comment"
            ref={e => (this.textComent = e)}
          />
          <button
            type="submit"
            className="btn"
            id="btnGuardar"
            value="Guardar Datos"
          >        
            POST COMMENT
          </button>
        </form>
        
        <div>
          <div>
            <h2>COMMENT</h2>
            <p>{list.length} comments</p>
            <ul>{listsComments}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapToProps = ({ list }) => ({ list });
export default connect(mapToProps)(App);
