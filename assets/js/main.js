/*
    * Project Name : EstateX - Real Estate Website
    * Designed & Coded by : 'Gulshan Songara'
*/


'use strict';

/*======-- 01) Preloader --======*/
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  preloader.classList.add('stop');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
});


/*======-- 02) Sticky / Mobile Navbar & Back-to-Top Btn --======*/
const stickyNav = document.querySelector('.sticky_navbar');
const mobNav = document.querySelector('.mob_navbar');
const backTop = document.querySelector('#back_top');

window.addEventListener('scroll', () => {
  let currTop = window.scrollY;

  // Sticky-Navbar
  if (currTop >= 400) {
    stickyNav.classList.add('sticked');
  }
  else {
    stickyNav.classList.remove('sticked');
  }

  // Mobile-Navbar Sticky
  if (currTop >= 100) {
    mobNav.classList.add('sticked');
  }
  else {
    mobNav.classList.remove('sticked');
  }

  // Back-to-top
  if (currTop >= 800) {
    backTop.classList.add('pop');
  }
  else {
    backTop.classList.remove('pop');
  }
});

// Back-to-top functionality
backTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  return false;
});


/*======-- 03) Sidebar --======*/
const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.querySelectorAll('.sidebar_btn');
const sidebarCloseBtn = document.querySelectorAll('.sidebar_close_btn');

// for Opening the Sidebar
sidebarBtn.forEach((currBtn) => {
  currBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
  });
});

// for Closing the Sidebar
sidebarCloseBtn.forEach((currCloseBtn) => {
  currCloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
  });
});

// Closing the Sidebar on clicking Outside and on the Sidebar-Links
document.addEventListener('click', (e) => {
  if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_btn') {
    sidebar.classList.remove('show');
  }
});


/*======-- 04) Account Modal --======*/
const body = document.documentElement;
const accModal = document.getElementById('account');
const accModalBtn = document.querySelectorAll('.account_modal_btn');
const accCloseBtn = document.querySelectorAll('.account_close_btn');

// for Opening the Account-Modal
accModalBtn.forEach(curr => {
  curr.addEventListener('click', () => {
    body.classList.add('overflow_hide');
    accModal.classList.add('visible');
    return false;
  });
});

// for Closing the Account-Modal
accCloseBtn.forEach(curr => {
  curr.addEventListener('click', () => {
    body.classList.remove('overflow_hide');
    accModal.classList.remove('visible');
    return false;
  });
});

/*======-- 05) Account Swiper (Login & Register) --======*/
const accountSwiper = new Swiper('.account_swiper', {
  speed: 500,
  spaceBetween: 100,
  autoHeight: true,
  allowTouchMove: false,
  navigation: {
    nextEl: '.account_swiper .swiper-button-next',
    prevEl: '.account_swiper .swiper-button-prev',
  }
});


/*======-- 06) Loading-Btns --======*/
const btnLoad = document.querySelectorAll('.btn_load');

btnLoad.forEach((currLoadBtn) => {
  currLoadBtn.addEventListener('click', function () {

    this.classList.add('btn_loading');

    setTimeout(() => {
      this.classList.remove('btn_loading');
    }, 4000);

    return false;
  });
});


/*======-- 07) Hero Btns --======*/
const heroBtns = document.querySelectorAll('.hero_btn');
const point = document.querySelector('.point');

heroBtns.forEach((curr, i) => {
  curr.addEventListener('click', () => {
    if (i === 1) {
      point.classList.add('clicked');
    } else {
      point.classList.remove('clicked');
    }
  });
});


/*======-- 08) Property Swiper --======*/
const propertySwiper = new Swiper(".property_swiper", {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.property_swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/*======-- 09) Testimonials Swiper --======*/
const testiSwiper = new Swiper(".testi_swiper", {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.testi_swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/*======-- 10) Blog Swiper --======*/
const blogSwiper = new Swiper(".blog_swiper", {
  speed: 1000,
  slidesPerView: 'auto',
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: '.blog_swiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


/*======-- 11) Nice-select --======*/
NiceSelect.bind(document.getElementById("a-select"), {});
NiceSelect.bind(document.getElementById("b-select"), {});
NiceSelect.bind(document.getElementById("c-select"), {});

const selectLocation = document.querySelector('.select_location .current');
const selectType = document.querySelector('.select_type .current');
const selectBudget = document.querySelector('.select_budget .current');

// function for changing the current Text of Select tag.
const selectLabel = (targetElem, currText) => {
  targetElem.innerHTML = currText;
}

selectLabel(selectLocation, `<i class='bx bxs-map'></i> <span>Choose Location</span>`);
selectLabel(selectType, `<i class='bx bxs-home'></i> <span>Property Type</span>`);
selectLabel(selectBudget, `<i class='bx bxs-wallet'></i> <span>Budget</span>`);