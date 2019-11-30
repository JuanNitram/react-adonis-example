import ACTIONS from './actions';

const defaultState = {
  items: []
};

const itemsReducer = (state = defaultState, action) => {
  switch(action.type){
    case ACTIONS.types.ITEMS: {
      console.log(action);
    }

    default: {
      console.log("default");
      return state;
    }
  }
};

export default itemsReducer;