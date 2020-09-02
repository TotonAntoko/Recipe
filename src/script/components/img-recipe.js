class ImageRecipe extends HTMLElement {
  constructor() {
    super();
    this._shadowDOM = this.attachShadow({ mode: "open" });
  }

  render() {
    this.src = this.getAttribute("src") || null;

    this._shadowDOM.innerHTML = /*html*/`
      <style>
        img {
          width: 150px;
          height: 150px;
        }
      </style>
      <img src="https://spoonacular.com/recipeImages/${this.src}" alt="">
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("img-recipe", ImageRecipe);