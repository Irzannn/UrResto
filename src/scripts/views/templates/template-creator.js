// eslint-disable-next-line import/no-cycle
import DetailHelper from '../../utils/detail-helper';
import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
  <article class="list__item">
    <img class="lazyload list__item-thumb" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="list__item-city">${restaurant.city}</div>
    <div class="list__item-content">
      <p class="list__item-rating">Rating : <span>${restaurant.rating}</span></p>
      <h2 class="list__item-title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h2>
      <p class="list__item-desc">${restaurant.description.slice(0, 120)}...</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant-picture" crossorigin="anonymous" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" tabindex="0" >
<div class="detailRestaurant">
    <h2> Restaurant Name</h2>
    <p>${restaurant.name}</p>
    <h2> Restaurant Address</h2>
    <p>${restaurant.address}</p>
    <p>${restaurant.city}</p>
    <h2> Restaurant Rate</h2>
    <p>${restaurant.rating}</p>
    <h2 class="restaurant-description-title">Description</h2>
    <p class="restaurant-description">${restaurant.description}</p>
</div>

<div class="detailRestaurant-menu">    
    <h2>Menu</h2>
    <div class="restaurant-menu">
        <ul>
            <h3>Makanan</h3>
            ${restaurant.menus.foods
    .map(
      (food) => `
      <li><p>${food.name}</p></li>
    `,
    )
    .join('')}
        </ul>
        
        <ul>
            <h3>Minuman</h3>
            ${restaurant.menus.drinks
    .map(
      (drink) => `
        <li><p>${drink.name}</p></li>
                `,
    )
    .join('')}
        </ul>
    </div>
</div> 
<h2 class="review-title">Reviews</h2>
${DetailHelper.eachCustomersReview(restaurant)}
`;

const createCustomerReviewTemplate = (customerReview) => `
  <div class="detailRestaurant-review">
    <div class="restaurant-review" id="restaurant-review">
      <div class="review-header">
        <p class="review-name">${customerReview.name}</p>
        <p class="review-date">${customerReview.date}</p>
      </div>
      <div class="review-comment">
        <p>${customerReview.review}</p>
      </div>
    </div>
  </div>
`;

const createCustomerReviewFormTemplate = () => `
  <form class="form-review" id="form-review">
    <h2>Masukkan review kamu disini :</h2>
    <div class="form-group">
      <label for="inputName">Nama</label>
      <input id="inputName" type="text" class="form-control" placeholder="Nama kamu ...">
    </div>
    <div class="form-group">
      <label for="inputReview">Review</label>
      <input id="inputReview" type="text" class="form-control" placeholder="Review kamu ...">
    </div>
    <div class="form-group-submit">
      <button id="submitReview" type="submit" class="submitReview">Kirim Review</button>
    </div>
  </form>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button> 
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createLikeRestaurantButtonTemplate,
  createRestaurantDetailTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewTemplate,
  createCustomerReviewFormTemplate,
};
