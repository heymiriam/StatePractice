import React, { Component } from 'react'

class StatePractice extends Component {
    constructor(){
        super()
        this.state = {
            message: '',
            value:'',
            imageWidth:'',
        }
    }
    handleFocus=(e)=>{
        console.log('You are agree to the site terms of service by filling out the form')
    }

    handleMouseEnter = (e) => {
    
        this.setState({
            message: '',

        })
    }

    handleOnLoad(e){
        e.preventDefault()
        const width=e.target.imageWidth
        if(width>100){
            console.log("Your image is big!")
        }
       
    }
    render() {
      return(
          <input type="text" onFocus={this.state.handlerOnFocus}/>,
         <h3 onMouseEnter={this.handlerMouseEnter}>{this.state.message}</h3>,
         <img src="https://unsplash.com/photos/HDxsIFHz4TI" alt="img" onLoad={this.handlerOnLoad}></img>
      )
    }
  }

  export default StatePractice