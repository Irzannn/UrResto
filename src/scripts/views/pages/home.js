import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="loader-container" id="loader-container">
      <div id="loader"></div>
    </div> 
    <section class="content" id="content" tabindex="0">
      <div class="latest">
        <h1>Explore Restaurants</h1>
        <div class="lists" id="contents"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const list = await RestaurantDbSource.restaurantList();
    const restaurantContainer = document.querySelector('#contents');
    list.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Home;
