import React, { Component } from 'react'
import { Button } from '@material-ui/core';


export default class YButton extends Component {
    render() {
        return (
            <div>
            <h3>List Winners by Year</h3>
              <Button variant="contained" id="year">Show Winners By Year</Button>  
            </div>
        )
    }
}
