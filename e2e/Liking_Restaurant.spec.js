/* eslint-disable no-undef */
const assert = require('assert');
// const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('.lists');
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');

  I.amOnPage('/');
  pause();
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

Scenario('unlike restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');

  I.amOnPage('/');
  pause();
  I.seeElement('.list__item a');
  const firstRestaurant = locate('.list__item-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  const likedRestaurantTitle = await I.grabTextFrom('.list__item-title');
  I.click(locate('.list__item-title').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada restaurant untuk ditampilkan', '.lists');
  pause();

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
