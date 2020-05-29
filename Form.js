import React from 'react'

const Form = (props) => {
    return(
        <div>
            <form onSubmit = {props.getSynonym}>
                <input type = "text" name = "Word" placeholder = "Word.."></input>
                <button>Get Synonyms</button>
            </form>
        </div>
    )
}

export default Form;