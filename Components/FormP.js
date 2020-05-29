import React from 'react'

const FormP = (props) => {
    return(
        <>
        <div>
            <form onSubmit = {props.getPlural}>
                <input type = "text" id = "Word" name = "Word" placeholder = "Word.."></input>
                <button>Get Plural</button>
            </form>
        </div>
        </>

    )
}

export default FormP;