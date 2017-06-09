import { USER_INFORMATION_INJECT } from '../constants';

export function userInformationInject(information) {
  return {
    type: USER_INFORMATION_INJECT,
    data: information,
  };
}

export function basic() {
  return {};
}
