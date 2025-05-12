import { Component } from "react";
import { PaintingList } from "components/painting/Card";
import { Greeting } from "./Greeting";
import data from '../data.json';
import { colorPickerOptions } from "colorPickerOpuions";
import { ColorOption } from "./colorOptions/ColorOptions";
import { Message } from "./Message";
import { Alert } from './alert/Alert';
import { Container } from './Container/Container';
import {GlobalStyle} from '../GlobalStyle'
import { Counter } from "./counter/Counter";
import { Header } from "./header/Header";
import { Form } from "./form/Form";
import { Dropdown } from "./dropdown/Dropdown";
import { Label } from "./label/Label";
import { MainForm } from "./mainForm/MainForm";
import { Pokemon } from "./pokemon/Pokemon";
import { PokemonInfo } from "./pokemon/PokemonInfo";
import { Timer } from "./timer/Timer";


export class App extends Component {
  
  state = {
    label: "",
    pokemonName: '',
    timerState: false,
  }
  
  // chooseLabel = (currLabel) => {
  //   this.setState({label: currLabel})
  // }

  // onName = (name) => {
  //   this.setState({pokemonName: name})
  // }


  render(){
  return <>
  {/* <Container>
  <PaintingList data = {data} />
  <Greeting name="Yehor" />
  <Message message = "Hello! How are you?"  />
  </Container> */}
  

  {/* <Container>
  <Alert text='Успіх!' type='success'/>
  <Alert text='Увага!' type='warning'/>
  <Alert text='Помилка!' type='error'/>
  </Container> */}
  {/* <GlobalStyle/> */}
  {/* <Header/>

    {/* <Form/> */}

    {/* <Dropdown/> */}
    
    {/* <ColorOption colorPickerOptions ={colorPickerOptions}  chooseLabel={this.chooseLabel}/>
    <Label label={this.state.label}/> */}
    {/* <MainForm/> */}

    {/* <Container>
      <Pokemon onName={this.onName}/>
      <PokemonInfo pokemonName={this.state.pokemonName}/>
    </Container> */}
    
    {/* <button type="button" onClick={()=>{this.setState((prevState)=>({timerState: !prevState.timerState}))}}>показати таймер</button>

    {this.state.timerState && <Timer/>} */}

      <Counter/>

</>}
  
};

