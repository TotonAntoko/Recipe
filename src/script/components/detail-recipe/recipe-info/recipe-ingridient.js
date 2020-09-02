class RecipeIngridients extends HTMLElement {

  render() {
    this.innerHTML = /*html*/`
    <ul id="ingridient"></ul>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("recipe-ingridient", RecipeIngridients);