import React from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Search from './Search';


function Beers() {

    const [beers, setBeers] = useState(null)
    const [beersClone, setBeersClone] = useState(beers)
    
    
    useEffect(()=>{

    async function getData(){
        let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
    
        setBeers(response.data)
        setBeersClone(response.data)
    }

    getData()

    },[])

    if(!beers){
    return <p>LOADING...</p>
    } 

    function handleSearch(event){
      let searchedBeer = event.target.value
      let filteredBeers = beers.filter((elem)=>{
        return elem.name.includes(searchedBeer)
      })

      
      setBeersClone(filteredBeers)
      
    }

    console.log(beersClone)
  
    return (
    <div>
      <Header />
      <h1>All Beers</h1>
      <Search search={handleSearch}/>
      {beers.map((elem) => {
        return (
          <div>
            <img src={elem.image_url} alt="" />,

            <Link to={`/${elem._id}`}>,
                <h3>{elem.name}</h3>
            </Link>,

            <p>{elem.tagline}</p>,
            <p>{elem.contributed_by}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
