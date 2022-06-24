import React from 'react'
import { Login } from './components/Login'
import { Routes,Route } from 'react-router-dom'
import { Listado } from './components/Listado'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {MovieDetail} from './components/MovieDetail'
import {Results} from './components/Results'
import { Favoritos } from './components/Favoritos'
import { useState, useEffect } from 'react'

export const App = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
      const favInLocal = localStorage.getItem('favs')
      if(favInLocal !== null){
          setFavorites(JSON.parse(favInLocal ))
      }
  },[])

  const addOrRemoveFevourite = (e) => {
  const favMovies = localStorage.getItem('favs')
  let temporal;
  if(favMovies === null){
    temporal=[]
  }else {
    temporal= JSON.parse(favMovies)
  }
    const btn= e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h5').innerText;
    const overview = parent.querySelector('p').innerText;
    const idMovie = btn.getAttribute('movie-ID');
    const movieData ={
      idMovie,imgURL,title,overview
    }
    const movieInArray = temporal.find(oneMovie =>{
      return oneMovie.idMovie === movieData.idMovie
    })
    if(!movieInArray){
      temporal.push(movieData);
      localStorage.setItem('favs',JSON.stringify(temporal))
      setFavorites(temporal)
      console.log("se agrego pelicula")
    }else {
      let moviesLeft = temporal.filter(oneMovie => {
        return oneMovie.idMovie !== movieData.idMovie
      })
      localStorage.setItem('favs',JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('se elimino pelicula')
    }
  }
  return (
    <>
      <Header favorites={favorites}/>

      <div className="container mt-3">
        <Routes>
          <Route path='/' element={<Login/>}/>
          {/* <Route path='/listado' element={<Listado/>} /> */}
          <Route path='/listado' element={<Listado addOrRemoveFevourite={addOrRemoveFevourite} />} />
          <Route path='/moviedetail' element={<MovieDetail/>} />
          <Route path='/resultados' element={<Results {...addOrRemoveFevourite}/>} />
          <Route path='/favoritos' element={<Favoritos addOrRemoveFevourite={addOrRemoveFevourite} favorites={favorites} />} />
        </Routes>
        </div>
      <Footer/>
   
    </>
  )
}
