import "./img-recipe";
import "./button-view";
import "./detail-box";

class RecipeItem extends HTMLElement {

  set items(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = /*html*/`
      <style>
        .single-recipe-wrap {
          display: block;
          overflow: hidden;
          -webkit-transition: all .4s ease-out;
          -moz-transition: all .4s ease-out;
          -ms-transition: all .4s ease-out;
          -o-transition: all .4s ease-out;
          transition: all .4s ease-out;
          -webkit-border-radius: 8px;
          -moz-border-radius: 8px;
          border-radius: 8px;
          background: #ffffff;
          border: 1px solid #ebebeb;
          position: relative;
          z-index: 1;
          margin-top: 10px;

        }

        .single-recipe-wrap .recipe-content {
          text-align: center;
        }

        .single-recipe-wrap:hover {
          -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
          -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
          margin-bottom: -58px;
          z-index: 999;
        }

        .recipe-image {
          position: relative;
          text-align: center;
        }

        .recipe-two-row-4 .slick-track {
          margin-top: 0px;
          padding: 0px 0 60px;
          transform: translateY(60px);
        }

        .recipe-col {
          padding-right: 8px;
          padding-left: 8px;
        }

        .single-recipe-wrap:hover .recipe-button-action {
          filter: alpha(opacity=100);
          opacity: 1;
          margin-top: 0;
        }
      </style>

      
      <div class="single-recipe-wrap">
        <div class="recipe-image">
          <img-recipe src='${this._item.image}'></img-recipe>
        </div>
        
        <div class="recipe-content">
          <detail-box title="${this._item.title}" 
                      time="${this._item.readyInMinutes}" 
                      serving="${this._item.servings}"></detail-box>
      
          <button-view id='${this._item.id}'></button-view>
        </div>
      </div>
    `;
    this.className = 'recipe-col';
  }
}

customElements.define("recipe-item", RecipeItem);