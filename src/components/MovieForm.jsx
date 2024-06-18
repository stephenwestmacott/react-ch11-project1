import React from 'react'

export default function MovieForm(props) {

    const handleChange = (e) => {
        const newMovie = { ...props.movie }
        newMovie[e.target.name] = e.target.value
        props.saveChanges(props.index, newMovie)
    }

  return (
    <form className="panel has-background-grey-lighter"  >

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Title</label>
                    </div>
                    <div className="field-body">
                        <input className="input" type="text" name="title"
                            value={props.movie.title} onChange={handleChange} />   
                    </div>
                </div>   

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Tagline</label>
                    </div>
                    <div className="field-body">
                        <textarea className="textarea" rows="2"  name="tagline"
                            value={props.movie.tagline} onChange={handleChange} ></textarea>
                    </div>
                </div>                  

                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label">Runtime</label>
                    </div>
                    <div className="field-body">
                        <input className="input" type="text" name="runtime"
                            value={props.movie.runtime} onChange={handleChange} />   
                    </div>
                </div>  
    
                                                  
            </form>
  )
}
