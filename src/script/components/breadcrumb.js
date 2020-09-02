class Breadcrumb extends HTMLElement {
  render() {

    this.innerHTML = /*html*/`
      <style>
        .breadcrumb-area {
          background: #F9F9F9;
          padding: 17px 0;
          border: 1px solid #ebebeb;
        }

        .breadcrumb-area a {
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 50rem;
        }

        .breadcrumb-area a:hover {
          color: white;
          background: #80BB01;
        }
      </style>
      <div class="breadcrumb-area" style="display:none;">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <a id="back-home">
                <i class="fa fa-arrow-left"></i>
                Back
              </a>
              <!-- breadcrumb-list end -->
            </div>
          </div>
        </div>
      </div>
    `;

    const btn_view_recipe = this.querySelector("#back-home");
    btn_view_recipe.addEventListener("click", function () {
      $('.main-content-wrap').hide();
      $('.breadcrumb-area').hide();
      $('main').show();
    });
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("nav-breadcrumb", Breadcrumb);