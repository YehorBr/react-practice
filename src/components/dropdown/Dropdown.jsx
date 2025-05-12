import { Component } from "react";
import './dropdown.css'

export class Dropdown extends Component{

    state = {
        showMenu: false, 
    }
    
    handleClick = (e) =>{
        this.setState((prevState)=>{
            return{
                showMenu: !prevState.showMenu 
            }
        })
    }


    render(){
        return <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.handleClick}
        >
            {this.state.showMenu ? "Close" : "Open"}
        </button>
        {this.state.showMenu && <div className="Dropdown__menu">Випадаюче меню</div> }
      </div>
      
    }
}

