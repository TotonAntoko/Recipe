class SocialMedia extends HTMLElement {
  render() {
    this.innerHTML = /*html*/`
    <style>
      .share-recipe-socail-area {
        margin-top: 20px;
        display: flex;
        align-items: center;
      }

      .share-recipe-socail-area li {
        display: inline-block;
        margin-left: 10px;
      }

      .share-recipe-socail-area ul {
        padding-left: 10px;
      }

      .share-recipe-socail-area li a {
        height: 30px;
        width: 30px;
        line-height: 30px;
        background: #f1f1f1;
        text-align: center;
        border-radius: 3px;
        color: #333;
      }

      .share-recipe-socail-area li a:hover {
        background: #80BB01;
        color: #ffffff;
      }
    </style>
    <div class="share-recipe-socail-area">
      <p>Share this product</p>
      <ul class="single-product-share">
        <li><a><i class="fa fa-facebook"></i></a></li>
        <li><a><i class="fa fa-twitter"></i></a></li>
        <li><a><i class="fa fa-pinterest"></i></a></li>
      </ul>
    </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("social-media", SocialMedia);