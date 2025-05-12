import { number } from "prop-types";
import { Component, useState } from "react";

export const MainForm = ()=>{

  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [number, setNumber] = useState('')
  const [level, setLevel] = useState('Junior')
  const [agree, setAgree] = useState(false)

  const handleChange = e =>{
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value)
        break;
      case "login":
        setLogin(e.target.value)
        break;

      case "number":
        setNumber(e.target.value)
        break;
    
      default:
        ""
        break;
    }
 }

 const handleCheck = e =>{
     setAgree(prevState=>!prevState)
 }

 const handleSubmit = e=>{
     e.preventDefault()

     
     
     e.currentTarget.reset()
 }

  return <>
  <form action="" onSubmit={handleSubmit}>
              <h1>Вітаю</h1>
            <label htmlFor="">
              <input name='email'type="email" placeholder="Напишіть свій email" 
              onChange={handleChange}
              value={email}/>
            </label>

              <br />

            <label htmlFor="">
                <input name='login' type="text" placeholder="Напишіть свій логін"
              value={login} 
              onChange={handleChange}/>
            </label>

              <br />

            <label htmlFor="">
              <input name='number' type="tel" placeholder='Напишіть свій номер телефону'
              value={number}
              onChange={handleChange}/>
            </label>

              <br />

              <h2>Ваш рівень:</h2>

            <label htmlFor="">
                <input name="level" type="radio" value="Junior" checked={level === "Junior"} onChange={handleChange}/>
                Junior
            </label>

                <br />

            <label htmlFor="">
                <input name="level" type="radio" value="Middle" checked={level === "Middle"} onChange={handleChange}/>
                Medium
            </label>

                <br />

            <label htmlFor="">
                <input name="level" type="radio" value="Senior" checked={level === "Senior"} onChange={handleChange}/>
                Senior
            </label>

                <br />
                
            <label htmlFor="">
                <input name="agree" type="checkbox" checked={agree} onChange={this.handleCheck} />
                Погоджуюся з умовами
            </label>

                <br />
              
              <button type="submit">Надіслати</button>
            </form>
  </>
}