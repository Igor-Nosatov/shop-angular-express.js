'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Головна',
    'state': 'main'
  }, {
    'title': 'Електроніка',
    'state': 'products({"slug": "computers-and-accessories"})'
  }, {
    'title': 'Мода',
    'state': 'products({"slug": "fashion"})'
  }, {
    'title': 'Популярне',
    'state': 'main',
    'featured': [{
      'image': 'assets/img/mega-b-6.jpg',
      'title': 'Ювелірні вироби та аксесуари',
      'state': 'products({"slug": "art-works"})',
      'items': [{
        'title': 'Шапки та рукавички',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Холодна погода',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Кожа',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Жилети',
        'state': 'products.detail({slug: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-5.jpg',
      'title': 'Валізи',
      'state': 'products({"slug": "women"})',
      'items': [{
        'title': 'Магазин',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Нові надходження',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Сумки',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Плечові сумки',
        'state': 'products.detail({slug: "1"})'
      }]
    }, {
      'image': 'assets/img/mega-b-7.jpg',
      'title': 'Туфлі',
      'state': 'products({"slug": "men"})',
      'items': [{
        'title': 'Слингове взуття',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Вечір',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Свитери',
        'state': 'products.detail({slug: "1"})'
      }, {
        'title': 'Холодна погода',
        'state': 'products.detail({slug: "1"})'
      }]
    }]
  }];


  isCollapsed = true;
  //end-non-standard

  constructor(Auth, Catalog) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;

    let self = this;

    Catalog.query(function(categories) {
      self.parentCategories = _.filter(categories, function(category) {
        return category.ancestors.length == 1 && category.slug != 'upsell-products';
      })
    });
  }
}

angular.module('bigmalApp')
  .controller('NavbarController', NavbarController);
