import React from 'react';
import axios from 'axios';
import Header from './Header';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'





function BeerDetail() {

    const {id} = useParams()

    const [beer , setBeer] = useState(null)

    useEffect(()=>{

        //let's try the ES6 WAY
         const getData = async()=>{
             let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
         
             setBeer(response.data)
            }


            getData()

    },[id])

    if(!beer){
        return <p>LOADING</p>
    }

    return (
        <div>
            <Header/>
            <img src={beer.image_url} alt=''/>
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetail
