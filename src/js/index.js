import '../scss/style.scss'
import {toggleAsideActive, toggleAsideActiveOnOpen} from './navigation'
import { addSwiper } from './swiper'
import { auto } from 'html-webpack-plugin/lib/chunksorter'
import { showMore } from './showMore'

const navigation = document.querySelector(".navigation");
const burger = document.querySelector('.circle-button--menu')
const cross = document.querySelector('.circle-button--cross')
const body = document.querySelector("body");
const articleShowMore = document.querySelector(".article__show-more-button");
const articleText = document.querySelector(".article__text");
const brandsShowMore = document.querySelector(".brands__show-more-button");
const brandsWrapper = document.querySelector(".brands__wrapper");
const wrapper = document.querySelector(".wrapper");
const repairsShowMoreButton = document.querySelector(".repairs__show-more-button");
const repairsWrapper = document.querySelector(".repairs__wrapper");
const feedbackMessage = document.querySelector(".modal--feedback--message");
const feedbackMessageOpen = document.querySelector(".circle-button--message");
const feedbackMessageOpenNav = document.querySelector(".navigation__message-button");
const feedbackMessageCross = document.querySelector(".modal--feedback--message .circle-button");
const feedbackPhone = document.querySelector(".modal--feedback--phone");
const feedbackPhoneOpen = document.querySelector(".circle-button--phone");
const feedbackPhoneOpenNav = document.querySelector(".navigation__phone-button");
const feedbackPhoneCross = document.querySelector(".modal--feedback--phone .circle-button");


toggleAsideActive(burger, navigation, wrapper, body);
toggleAsideActive(cross, navigation, wrapper, body);
toggleAsideActiveOnOpen(feedbackMessage, 'circle-button--message', feedbackMessageCross, wrapper, 'modal--active' , navigation);
toggleAsideActiveOnOpen(feedbackPhone, 'circle-button--phone', feedbackPhoneCross, wrapper, 'modal--active' , navigation);
toggleAsideActiveOnOpen(navigation, 'circle-button--menu', cross, wrapper, 'navigation--active');
toggleAsideActive(feedbackMessageOpen, feedbackMessage, wrapper, body, navigation);
toggleAsideActive(feedbackMessageOpenNav, feedbackMessage, wrapper, body, navigation);
toggleAsideActive(feedbackMessageCross, feedbackMessage, wrapper, body, navigation);
toggleAsideActive(feedbackPhoneOpen, feedbackPhone, wrapper, body, navigation);
toggleAsideActive(feedbackPhoneOpenNav, feedbackPhone, wrapper, body, navigation);
toggleAsideActive(feedbackPhoneCross, feedbackPhone, wrapper, body, navigation);

addSwiper(
  '(max-width: 1366px)',
  '.services__scroll',
  {
    loop: true,
    spaceBetween: 10,
    freeMode: true,
    slidesPerView: 'auto',
  }
);

showMore(articleShowMore, articleText, "Читать далее");

addSwiper(
  '(max-width: 768px)',
  '.brands__swiper',
  {
    slidesPerView: 1.2,
    spaceBetween: 16,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
    },
  }
);

showMore(brandsShowMore, brandsWrapper, "Показать все");
showMore(repairsShowMoreButton, repairsWrapper, "Показать все");

addSwiper(
  '(max-width: 768px)',
  '.repairs__swiper',
  {
    slidesPerView: 1.2,
    spaceBetween: 16,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
    },
  }
);

addSwiper(
  '(max-width: 768px)',
  '.prices__swiper',
  {
    slidesPerView: 1.2,
    spaceBetween: 16,
    mousewheel: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
    },
  }
);
