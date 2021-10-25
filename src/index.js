import Card from './components/Card.js'
import { getBySelector, getByDataJs } from './lib/dom'
import { randomNumber } from './lib/math.js'
import './styles/index.css'

const btn = getByDataJs('btn')

btn.addEventListener('click', () => {
  document.querySelectorAll('.Card').forEach(function (a) {
    a.remove()
  })
  fetchAPI()
  fetchAPI()
})

function fetchAPI() {
  fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber(1, 151))
    .then(response => response.json())
    .then(data => renderCard(data))
}

function renderCard(data) {
  const container = getBySelector('#cards-container')
  const card = Card({
    name: data.name,
    type: data.types[0].type.name,
    height: data.height,
    weight: data.weight,
    level: data.base_experience - randomNumber(1, 50),
    img: data.sprites.other.dream_world.front_default,
  })
  container.append(card)
}
