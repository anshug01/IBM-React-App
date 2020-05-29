import React from 'react'

const Form = (props) => {
    return(
        <>
        <div>
            <form onSubmit = {props.getSynonym}>
                <input type = "text" id = "Word" name = "Word" placeholder = "Word.."></input>
                <button>Get Synonyms</button>
            </form>
        </div>
        </>

    )
}

export default Form;