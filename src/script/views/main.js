import 'slick-carousel';
import "../components/hero-item";
import "../components/recipe-recent";

import DataSource from '../data/data-source.js';

const main = () => {
  const recipeListElement = document.querySelector("recipe-recent");
  const loaderElement = document.querySelector("#loader-outer");

  const searchRecipe = async (keyword) => {
    loaderElement.style.display = 'block';
    try {
      const result = await DataSource.searchRecipe(keyword);
      renderResult(result);
    } catch (message) { }
  }

  const renderResult = results => {
    recipeListElement.update = results;
    loaderElement.style.display = 'none';

    $('.recipe-two-row-4').slick({
      dots: false,
      infinite: true,
      rows: 3,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  };

  searchRecipe('none');

}

export default main;


