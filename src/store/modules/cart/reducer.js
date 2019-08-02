import { produce } from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.product.id);

        if (produceIndex >= 0) {
          draft[produceIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.id);

        if (produceIndex >= 0) {
          draft.splice(produceIndex, 1);
        }
      });

    case '@cart/UPDATE':
      return produce(state, draft => {
        const produceIndex = draft.findIndex(p => p.id === action.id);

        if (produceIndex >= 0) {
          draft[produceIndex].amount = Number(action.amount);
        }
      });

    default:
      return state;
  }
}
