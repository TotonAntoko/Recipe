class RecipeDescription extends HTMLElement {

  set update(value) {
    this.setAttribute('title', value.title);
    this.setAttribute('time', value.time);
    this.setAttribute('summary', value.summary);
    this.setAttribute('serving', value.serving);
    this.render();
  }

  render() {
    this.title = this.getAttribute("title") || null;
    this.time = this.getAttribute("time") || null;
    this.summary = this.getAttribute("summary") || null;
    this.serving = this.getAttribute("serving") || null;

    this.innerHTML = /*html*/`
      <style>
        .info {
          color: #80bb01;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 15px;
          margin-top: 10px;
          width: 100%;
          -webkit-transition: 0.3s ease;
          -moz-transition: 0.3s ease;
          -ms-transition: 0.3s ease;
          -o-transition: 0.3s ease;
          transition: 0.3s ease;
        }

        .label {
          background: none;
          text-decoration: none;
          color: #80bb01;
          font-weight: 500;
        }

        .value {
          color: #777;
          display: inline-block;
          font-weight: normal;
          margin-left: 4px;
          filter: alpha(opacity=100);
          opacity: 1;
        }
        .hr-line {
          margin-top: 20px;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }

        .detail-info {
          display: inline;
          margin: 0 5em 0 0;
        }
      </style>

      <h3>${this.title}</h3>
      <div class="info">
        <div class="detail-info">
          <span class="label">Cooking</span>
          <span class="value">: ${this.time} Mins</span>
        </div>
        <div class="detail-info">
          <span class="label">Serving</span>
          <span class="value">: ${this.serving} x</span>
        </div>
      </div>
      <p>${this.summary}</p>


      <div class="hr-line"></div>
    `;
  }
}

customElements.define("recipe-description", RecipeDescription);