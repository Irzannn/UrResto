import FavoriteRestaurantDB from '../../data/favoriteRestaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="loader-container" id="loader-container">
      <div id="loader"></div>
    </div> 
    <section class="content" id="content" tabindex="0">
      <div class="latest">
        <h1>Your Favorite Restaurants</h1>
        <div class="lists" id="contents"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const list = await FavoriteRestaurantDB.getAllRestaurant();
    const restaurantContainer = document.querySelector('#contents');

    if (list.length === 0) {
      restaurantContainer.innerHTML = `
      Tidak ada restaurant untuk ditampilkan
      `;
    }

    list.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });

    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.style.display = 'none';
  },
};

export default Favorite;
