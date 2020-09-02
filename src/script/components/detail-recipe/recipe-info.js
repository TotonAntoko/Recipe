import './recipe-info/social-media';
import './recipe-info/recipe-ingridient';
import './recipe-info/recipe-description';

class RecipeInfo extends HTMLElement {

  render() {
    this.innerHTML = /*html*/`
      
      <div class="product-info">
        <recipe-description></recipe-description>

        <recipe-ingridient></recipe-ingridient>
        <social-media></social-media>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("recipe-info", RecipeInfo);