import { Component } from "react";
import css from './ColorOptions.module.css'
import PropTypes from 'prop-types';

export class ColorOption extends Component{

    render(){
        return <ul className={css.list}>
        {this.props.colorPickerOptions.map((option)=>{
            return <li><button onClick={()=>{this.props.chooseLabel(option.label)}} style={{backgroundColor: option.color}} type="button">{option.label}</button></li>
        })}
    </ul>
}   

}


