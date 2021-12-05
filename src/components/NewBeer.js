import React from 'react';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
function NewBeer() {
  const navigate = useNavigate();

  async function create(event) {
    event.preventDefault(); //HAUKE

    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = event.target;
    
    let newBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };
    
    //HAUKE
    await axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer);

    navigate('/');
  }

  return (
    <div>
      <Header />
      <form onSubmit={create}>
        <input name="name" type="text" placeholder="name"></input>
        <input name="tagline" type="text" placeholder="tagline"></input>
        <input name="description" type="text" placeholder="description"></input>
        <input
          name="first_brewed"
          type="text"
          placeholder="first brewed"
        ></input>
        <input
          name="brewers_tips"
          type="text"
          placeholder="brewers tips"
        ></input>
        <input
          name="attenuation_level"
          type="number"
          placeholder="attenuation level"
        ></input>
        <input
          name="contributed_by"
          type="text"
          placeholder="contributed by"
        ></input>
        <button>Create !</button>
      </form>
    </div>
  );
}

export default NewBeer;
