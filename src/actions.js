export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM_PURCHASE = 'TOGGLE_ITEM_PURCHASE';
export const DELETE_PURCHASED = 'DELETE_PURCHASED';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_PURCHASE_FILTER = 'SET_PURCHASE_FILTER';
export const SET_SORT = 'SET_SORT';

let nextItemId = 3;
export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload: {
      ...payload,
      id: nextItemId++,
      purchased: false,
    }
  }
}

export function toggleItemPurchase(id) {
  return {
    type: TOGGLE_ITEM_PURCHASE,
    payload: id,
  }
}

export function deletePurchased() {
  return {
    type: DELETE_PURCHASED,
    payload: {},
  }
}

export function setCategoryFilter(payload) {
  return {
    type: SET_CATEGORY_FILTER,
    payload,
  }
}

export function setPurchaseFilter(payload) {
  return {
    type: SET_PURCHASE_FILTER,
    payload,
  }
}

export function setSortFilter(payload) {
  return {
    type: SET_SORT,
    payload,
  }
}