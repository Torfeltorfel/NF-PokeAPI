import Card from './components/Card.js'
import { getBySelector, getByDataJs, getAllByDataJs } from './lib/dom'
import { randomNumber } from './lib/math.js'
import './styles/index.css'
import { getPokemon } from './lib/api.js'

const btn = getByDataJs('btn')
const btnFight = getByDataJs('btnFight')

btn.addEventListener('click', () => {
  document.querySelectorAll('.Card').forEach(function (a) {
    a.remove()
  })
  fetchData()
  fetchData()
  btnFight.classList.remove('--hidden')
  btn.classList.add('--hidden')
})

async function fetchData() {
  const pokemon = await getPokemon()
  renderCards(pokemon)

  function renderCards(data) {
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

  btnFight.addEventListener('click', () => {
    const helper1 = getAllByDataJs('level')
    const levelPok1 = helper1[0].innerHTML
    const levelPok2 = helper1[1].innerHTML
    console.log(levelPok1, levelPok2)

    btnFight.classList.add('--hidden')
    btn.classList.remove('--hidden')
  })
}
