import 'bootstrap';
import "regenerator-runtime";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'slick-carousel/slick/slick.css'
import "./style/style.css";

import './script/components/detail-recipe/image-view';
import './script/components/detail-recipe/recipe-info';

import './script/components/breadcrumb';

// Loader
import './script/components/loader-item';

import main from "./script/views/main.js";

document.addEventListener("DOMContentLoaded", main);