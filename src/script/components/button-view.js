import DataSource from '../data/data-source.js';

class ButtonView extends HTMLElement {
  switchPage() {
    $('main').hide();
    $('.main-content-wrap').show();
    $('.breadcrumb-area').show();
  }

  render() {
    this.id = this.getAttribute("id") || null;

    this.innerHTML = /*html*/`
      <style>
        a {
          color: inherit;
          display: inline-block;
          line-height: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        .recipe-button-action {
          height: 58px;
          filter: alpha(opacity=0);
          opacity: 0;
          margin-top: -58px;
          -webkit-transition: all .4s ease-out;
          -moz-transition: all .4s ease-out;
          -ms-transition: all .4s ease-out;
          -o-transition: all .4s ease-out;
          transition: all .4s ease-out;
        }

        .to-ingridients {
          background: #80bb01;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.025em;
          height: 40px;
          line-height: 40px;
          padding: 0 35px;
          text-shadow: none;
          text-transform: capitalize;
          text-align: center;
          -webkit-border-radius: 3px;
          -moz-border-radius: 3px;
          border-radius: 3px;
          -webkit-transition: 0.3s ease;
          -moz-transition: 0.3s ease;
          -ms-transition: 0.3s ease;
          -o-transition: 0.3s ease;
          transition: 0.3s ease;
          padding: 0 18px;
        }

        .to-ingridients:hover {
          background: #5d8801;
          border-color: #5d8801;
          color: #fff;
        }
        
      </style>
      <div class="recipe-button-action" data-id='${this.id}'>
        <a class="to-ingridients">View Ingredients</a>
      </div>
    `;

    // PreLoader Element
    const loaderElement = document.querySelector("#loader-outer");

    // Datasource Infromation Receipe
    const informationRecipe = async (id) => {
      loaderElement.style.display = 'block';

      try {
        const result = await DataSource.informationRecipe(id);
        renderResult(result);
      } catch (message) { }
    }

    // Callback Success
    const renderResult = results => {
      console.log(results);
      loaderElement.style.display = 'none';

      this.switchPage();

      // Image
      const imageElement = document.querySelector("image-view");
      imageElement.update = { 'src': (results.image) };

      // Description
      const descriptionElement = document.querySelector("recipe-description");
      const descriptionHeader = {
        'title': (results.title),
        'time': (results.readyInMinutes),
        'serving': (results.servings),
        'summary': (results.summary)
      }
      descriptionElement.update = descriptionHeader;

      // Ingredients
      results.extendedIngredients.forEach(item => {
        $('#ingridient').append(`<li>${item.original}</li>`);
      })

      $(window).scrollTop(0);
    };

    const btn_view_recipe = this.querySelector(".recipe-button-action");
    btn_view_recipe.addEventListener("click", function () {
      const id_recipe = this.getAttribute("data-id");
      informationRecipe(id_recipe);
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("button-view", ButtonView);