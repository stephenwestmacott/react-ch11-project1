import React from 'react'
import SingleMovie from './SingleMovie'

export default function MovieList(props) {
  return (
    <div className="column is-half">
            <ul className="columns is-multiline">
              {props.movies.map( movie => <SingleMovie key={movie.id}  poster={movie.poster} title={movie.title} tagline={movie.tagline} runtime={movie.runtime} id={movie.tmdbID}/> )}
            </ul>   
        </div>   
  )
}
