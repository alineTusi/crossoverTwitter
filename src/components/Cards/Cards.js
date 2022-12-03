import React, { useEffect, useState } from "react";
import './Cards.css'
import Photo from "../../../src/gradient.png"
import ProfilePicture from "../../../src/profile.jpg"
import axios from "axios";


const Cards = () => {

const [users, setUsers] = useState([])


useEffect(() => {
        // Make a request for a user with a given ID
axios.get('https://twittercrossover.herokuapp.com/users/list')
.then(function (response) {
  // handle success

  setUsers(response.data.users);
})
.catch(function (error) {
  // handle error
  console.log(error);
})

},[])


    return (
        <div className="container-card">
            {users.map((user)=> {
                return (
                    <div key={user._id} className="transform">
                    <div className="card card-1">
                    <img style={{
                            borderRadius: "6em"
                        }} src={ProfilePicture} width="60px"></img>
                        <a href={`users/${user._id}`}><h2>{user.username}</h2></a>
                        <img src ={Photo} alt="img" width="310px"></img>
                        <h4>Element</h4>
                        <p>Comments</p>
                    </div> 
                </div>
                )
            })}
      
    </div>
    )
}


export default Cards;