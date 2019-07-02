import { TO1STEP, TO2STEP, TOBACKSTEP, TONEXTSTEP } from '../actions/type';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case TO1STEP:
      return 1;

    case TO2STEP:
      return 2;

    case TONEXTSTEP:
      return state + 1;

    case TOBACKSTEP:
      return state - 1;

    default:
      return state;
  }
}