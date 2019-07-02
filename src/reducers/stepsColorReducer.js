import { ENABLE1, ENABLE2, ENABLE3, ENABLE4, ENABLE5 } from '../actions/type';
import stateStorage from '../config/stateStorage';

const initialState = {
  step1: stateStorage.enabledColor,
  step2: stateStorage.disabledColor,
  step3: stateStorage.disabledColor,
  step4: stateStorage.disabledColor,
  step5: stateStorage.disabledColor,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ENABLE1:
      return initialState;

    case ENABLE2:
      return {
        step1: stateStorage.enabledColor,
        step2: stateStorage.enabledColor,
        step3: stateStorage.disabledColor,
        step4: stateStorage.disabledColor,
        step5: stateStorage.disabledColor,
      };

    case ENABLE3:
      return {
        step1: stateStorage.enabledColor,
        step2: stateStorage.enabledColor,
        step3: stateStorage.enabledColor,
        step4: stateStorage.disabledColor,
        step5: stateStorage.disabledColor,
      };

    case ENABLE4:
      return {
        step1: stateStorage.enabledColor,
        step2: stateStorage.enabledColor,
        step3: stateStorage.enabledColor,
        step4: stateStorage.enabledColor,
        step5: stateStorage.disabledColor,
      };

    case ENABLE5:
      return {
        step1: stateStorage.enabledColor,
        step2: stateStorage.enabledColor,
        step3: stateStorage.enabledColor,
        step4: stateStorage.enabledColor,
        step5: stateStorage.enabledColor,
      };

    default:
      return state;
  }
}