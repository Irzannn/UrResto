/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#lists');
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');
});

Scenario('liking one movie', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');

  I.amOnPage('/');
  I.seeElement('.list__item a');
  const firstRestaurant = locate('.list__item-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  const likedRestaurantTitle = await I.grabTextFrom('.list__item-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
