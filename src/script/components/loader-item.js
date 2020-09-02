class Loader extends HTMLElement {
  render() {
    this.innerHTML = /*html*/ `
      <style>
        #loader-outer {
          background: rgba(0, 0, 0, 0.685);

          position: fixed;
          left: 0%;
          top: 0%;
          z-index: 2;
          width: 100%;
          height: 100%;
        }

        #loader {
          position: fixed;
          z-index: 1;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          border: 8px solid #f3f3f3;
          border-radius: 50%;
          border-top: 8px solid #3498db00;
          width: 90px;
          height: 90px;
          -webkit-animation: spin 2s linear infinite;
          animation: spin 2s linear infinite;
        }

        @media only screen and (min-width: 479px) and (max-width: 767px) {
          #loader {
            position: fixed;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid #3498db00;
            width: 60px;
            height: 60px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
          }
        }

        @media only screen and (max-width: 479px) {
          #loader {
            position: fixed;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            border: 8px solid #f3f3f3;
            border-radius: 50%;
            border-top: 8px solid #3498db00;
            width: 45px;
            height: 45px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
          }
        }

        @-webkit-keyframes spin {
          0% {
            -webkit-transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <div id="loader-outer" style="display: none;">
        <div id="loader"></div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('loader-item', Loader);