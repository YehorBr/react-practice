// 1 - показати текст "Введіть ім'я покемона" використати тернарник
// 2 - після сабміту форми показати лоадер (створюємо властивість в стейті і зберігаємо стан лоадера)
// 3 - показати нотифікації при сабміті пустої форми або якщо такого покемона немає
// 4 - обробка помилки


import { Component, useState } from "react"

// export class Pokemon extends Component{

//     state = {
//         pokemonName: "",
//     }

    

//     render(){
//     return <form onSubmit={handleName}>
//                 <label htmlFor="">
//                     <input type="text" value={this.state.pokemonName} onChange={this.handleChange}/>
//                 </label>
//                 <button>click me</button>
//             </form>
//     }
    
// }

export const Pokemon = ({onName})=>{

    const [pokemonName, setPokemonName] = useState("")

    const handleChange = (e)=>{
        setPokemonName(e.currentTarget.value)
    }

    const handleName = (e)=>{
        e.preventDefault()

        onName(pokemonName)
    }


    return  <> <form onSubmit={handleName}>
                    <label htmlFor="">
                        <input type="text" value={pokemonName} onChange={handleChange}/>
                    </label>
                    <button>click me</button>
                </form>
            </>
}