import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ name, type, weight, height, level, img }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
      <div class="image-wrapper">
       <img class="Card__image" src="${img}" alt="" />
      </div>

        <h2>${name}</h2>
        <h3 data-js="level">Level: ${level}</h3>
        <dl>
          <div class="item-wrapper">
            <dt>TYPE</dt>
            <dd>${type}</dd>
          </div>
          <div class="item-wrapper">
            <dt>HEIGHT</dt>
            <dd>${height / 10} m</dd>
          </div>
          <div class="item-wrapper">
            <dt>WEIGTH</dt>
            <dd>${weight / 10} kg</dd>
          </div>
        </dl>
    `,
  })

  return el
}
