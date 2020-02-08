import React from 'react'
import Button from "react-bootstrap/Button"
const DateInput = (props) => {
    return (

        <form onSubmit={props.changeDate}>
            <h3>Please enter a Date (YYYY-MM-DD):</h3>
            <input />{' '}

            <Button type='submit' variant="dark">GET PIC</Button>
        </form>
    )
}
export default DateInput;