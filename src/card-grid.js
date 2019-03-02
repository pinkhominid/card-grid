/**
 * CardGrid
 */
const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: block;
      --gap: 2rem;
      --colmin: 24ch;
    }
    :host([hidden]) {
      display: none;
    }
    *, *::after, *::before {
      box-sizing: border-box;
    }
    slot {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--colmin), 1fr));
      grid-gap: var(--gap);
      padding: var(--gap);
    }
  </style>
  <slot></slot>
`;

class CardGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('card-grid', CardGrid);

export {
  CardGrid as default,
  CardGrid,
}