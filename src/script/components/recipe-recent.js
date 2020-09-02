import './recipe-item'

class RecipeList extends HTMLElement {
  set update(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-8 recipe-two-row-4";

    this._item.forEach(item => {
      const recipeItemElement = document.createElement("recipe-item");

      recipeItemElement.items = item;
      this.appendChild(recipeItemElement);
    });
  }
}

customElements.define("recipe-recent", RecipeList);