import React from 'react'

export default function MovieLink(props) {
  return (
    <a className="button card-footer-item" 
            href={ "https://www.themoviedb.org/movie/" + props.id } >
                <img src="tmdb.svg" width="30" alt='tmdb-link'/>
        </a>    
  )
}
