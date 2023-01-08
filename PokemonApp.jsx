import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons } from './src/store/slices/pokemon'
import { getPokemons } from './src/store/slices/pokemon/thunks'

const PokemonApp = () => {


    const dispatch = useDispatch()
    const{isLoading,pokemons,page}= useSelector(state => state.pokemones)


     

    useEffect(() => {
        
        dispatch(getPokemons())
    }, [  ])
    
  return (
    < > 
    <h1>
        PokemonApp

    </h1>
    <hr />
    {/* <span>Loading:{isLoading?'True':'False'} </span> */}
    <span>Loading...</span>
    <ul>
       {pokemons.map(pok =>(
        <li key={pok.name}>{pok.name} </li>
       ))}
        
    </ul>
    <hr />
        <button  disabled={isLoading} onClick={()=> dispatch(getPokemons(page))}>
        Next
    </button>
    </ >
  )
}

export default PokemonApp