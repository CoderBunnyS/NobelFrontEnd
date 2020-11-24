import React, { Component } from 'react'
import { Button } from '@material-ui/core';


export default class YButton extends Component {
    render() {
        return (
            <div>
            <h3>List Winners by Category</h3>
              <Button variant="contained" id="cat">Show Winners By Category</Button>  
            </div>
        )
    }
}