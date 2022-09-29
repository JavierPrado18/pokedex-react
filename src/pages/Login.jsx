import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import trainers from "../assets/trainers.png"
const UserImput = () => {
  const [user, setUser] = useState("");

  const dispath = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispath(changeUser(user));
    navigate("/pokedex");
  };

  return (
    <div className="container-initial">
      
      <div className="container-welcome">
        <img
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
          alt="logo"
        />
        
        <h2>Hello trainer!</h2>
        <p>
          <b>Give me your name to start</b>{" "}
        </p>
        <form
          className="container-search"
          onSubmit={submit}
          style={{ marginTop: "30px" }}
        >
          <input
            type="text"
            placeholder="Name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <button>Star</button>
        </form>
      </div>
     
      <div className="pokeball">
      <div className="bg-white"></div>
        <div className="bg-black">
          <div className="pokeball-button">
            <div></div>
          </div>
        </div>
        <div className="bg-red"></div>
      </div>
    </div>
  );
};

export default UserImput;
