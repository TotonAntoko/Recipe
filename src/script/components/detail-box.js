class DetailBox extends HTMLElement {

  render() {
    this.title = this.getAttribute("title") || null;
    this.time = this.getAttribute("time") || null;
    this.serving = this.getAttribute("serving") || null;

    this.innerHTML = /*html*/`
      <style>
        .detail-box {
          color: #80bb01;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 5px;
          width: 100%;
          -webkit-transition: 0.3s ease;
          -moz-transition: 0.3s ease;
          -ms-transition: 0.3s ease;
          -o-transition: 0.3s ease;
          transition: 0.3s ease;
        }

        .detail-box .time {
          background: none;
          font-size: 1em;
          text-decoration: none;
          color: #777;
          font-size: 14px;
          font-weight: 500;
          display: block;
        }

        .detail-box .serving {
          color: #777;
          display: inline-block;
          font-size: .875em;
          font-weight: normal;
          margin-left: 4px;
          /* text-decoration: line-through; */
          filter: alpha(opacity=100);
          opacity: 1;
        }
        .title {
          color: #333333;
          font-size: 1em;
          margin-bottom: 15px;
          font-weight: normal;
          line-height: 15px;
          margin: 0 5px 20px 5px;
          text-transform: capitalize;
        }
      </style>

      <h1 class='title'>${this.title}</h1>
      <div class="detail-box">
        <span class="time">${this.time} Mins Ready</span>
        <span class="serving">${this.serving} Serving</span>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-box", DetailBox);