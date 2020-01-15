import React from 'react'

const DateInput = (props) => {
    return(
        
        <form onSubmit={props.changeDate}>
        <h3>Please enter a Date (YYYY-MM-DD):</h3>
        <input />
        <input type='submit'/>
        </form>
      
    )
}
export default DateInput;