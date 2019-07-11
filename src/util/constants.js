import React from 'react';
import Config from '../config/config';

export const Url = {
   LOGIN: Config.REST_URL + '/integration/customer/token',
   GET_CUSTOMER_INFO: Config.REST_URL + '/customer/me',
   GET_PRODUCTS: Config.REST_URL + '/products',

}

export const Key = {
  DATA: 'data',
  CONFIG: 'config',
  USER: 'user',
  USER_NAME: 'username',
  SESSION_ID: 'session-id',
  PASSWORD: 'password',
  EMAIL: 'email',
  CREDENTIALS: 'credentials',
  CURRENT_ROUTE: 'current_route',
  TOKEN: 'token',
};

export const MenuId = {
  header: 'header',
  login: 'in',
  home: 'menuHome',
  category: 'menuCategory',
  order: 'menuOrder',
  fav: 'favoriteList',
  account: 'account',
  message: 'message',
  deal: 'deal',
  voucher: 'voucher',
  support: 'support',
  settings: 'settings',
  help: 'help',
  logout: 'logout',
  separator: 'sep',
};

const Constant = {
  CODE_OK: '0',
  STATUS_OK: 'ok',
  STATUS_KO: 'ko',
  DEFAULT_SCREEN: MenuId.home,
};


export default Constant;
