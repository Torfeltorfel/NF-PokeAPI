import { randomNumber } from './math.js'

export async function getPokemon() {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + randomNumber(1, 151)
  )
  const data = await response.json()
  return data
}
