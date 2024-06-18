import React from 'react'
import MovieLink from './MovieLink'

export default function SingleMovie(props) {
  return (
    <li className="column is-one-third-desktop is-half-tablet"  >
            <div className="card">
                <div className="card-image">
                <figure className="image is-2by3">
                    <img src={"https://image.tmdb.org/t/p/w185" + props.poster}  alt="Sample Title" />
                </figure>
                </div>
                <div className="card-content has-text-centered content-rectangle">
                    <h2 className="title is-6">{props.title + ' (' + props.runtime + ' min)'}</h2>
                    <p className="is-size-7">{props.tagline}</p>
                </div>    
                <footer className="card-footer">
                    <MovieLink id={props.id} />
                </footer>                                      
            </div>                
        </li>
  )
}
