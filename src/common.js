import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'
export default{
  APP_NAME: 'Mezzo Hotel',
  APP_TAGLINE: 'LUXURY HOTEL',
  APP_EMAIL: 'admin@mezzohotel.com',
  APP_COPYRIGHT: 'Mezzo Hotel ' + new Date().getFullYear(),
  APP_DEVELOPER: 'Increment Technologies',
  APP_DEVELOPER_URL: 'http://increment.ltd',
  APP_PHONE_NUMBER: '0912345678',
  APP_HEADER_BACKGROUND: [{
    url: require('assets/img/mezzolobby.jpg')
  }],
  APP_HEADER_MOBILE_BACKGROUND: [{
    url: 'http://revamp.mezzohotel.com/img/mainm1.png'
  }],
  address: 'F. Cabahug, Pres. Quezon St, Cebu City, 6000 Cebu',
  api: 'http://revamp.mezzohotel.com/img/',
  host: 'http://revamp.mezzohotel.com/',
  booking_link: 'https://mezzohotel.com/managebooking.php',
  socialMedia: {
    facebook: 'https://www.facebook.com/mezzohotelcebu'
  },
  socialIcons: [{
    icon: faFacebook,
    url: 'https://www.facebook.com/mezzohotelcebu'
  }, {
    icon: faTwitter,
    url: 'https://twitter.com/hashtag/mezzohotel'
  }, {
    icon: faInstagram,
    url: 'https://www.instagram.com/mezzohotelcebu'
  }],
  menus: [],
  packages: null,
  testimonials: [],
  rooms: [],
  restaurants: [],
  faq: [],
  gallery: [],
  addOns: [],
  announcements: [],
  activeMenu: '#top-view'
}