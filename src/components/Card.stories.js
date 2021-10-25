import Card from './Card'

export default {
  title: 'components/CardTorben',
  component: Card,
}

export const Default = () =>
  Card({
    name: 'Pummeloff',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg',
    type: 'grass',
    level: 111,
    height: 29,
    weight: 33,
  })
