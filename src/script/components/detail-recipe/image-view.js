class ImageView extends HTMLElement {
  set update(value) {
    this.setAttribute('src', value.src);
    this.render();
  }

  render() {
    this.src = this.getAttribute("src") || null;

    this.innerHTML = /*html*/`
      <style>
        img {
          width: 260px;
          height: 260px;
        }
      </style>
      
      <img src="${this.src}" alt="">
    `;
  }
}

customElements.define("image-view", ImageView);