import IMG from '../../assets/header.jpg'

class Hero extends HTMLElement {
  render() {
    this.innerHTML = /* html */`
    <style>
      .slider-content-text {
        padding: 70px 50px;
        width: 100%;
      }

      .slider-content-text h1 {
        color: #ffffff;
        margin-bottom: 20px;
      }

      .slider-content-text p {
        color: #ffffff;
      }

      .slider-content-text .slider-btn {
        margin-top: 50px;
      }

      .slider-content-text .slider-btn a {
        z-index: 8;
        min-width: 170px;
        max-width: 170px;
        font-size: 16px;
        line-height: 50px;
        font-weight: 500;
        color: #333333;
        letter-spacing: 0px;
        text-transform: uppercase;
        background-color: white;
        border-radius: 3px;
        text-align: center;
        min-height: 50px;
        opacity: 1;
        transform-origin: 50% 50% 0px;
        transform: translate3d(0px, 0px, 0px);
        box-shadow: #999999 0px 0px 0px 0px;
      }

      .slider-content-text .slider-btn a:hover {
        background: #80BB01;
        color: #ffffff;
      }

      @media only screen and (max-width: 767px) {
        .slider-content-text {
          padding: 50px 15px;
        }

        .slider-content-text h1 {
          font-size: 26px;
          line-height: 30px;
        }
      }
    </style>

    <div style="background-image: url('${IMG}')">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="slider-content-text text-center">
              <h1>Get Recipe <br>Available Recipe For 2020 </h1>
              <div class="slider-btn">
                <a href="#recipe-list">Cooking Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("hero-item", Hero);