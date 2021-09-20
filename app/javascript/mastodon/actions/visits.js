import api, { getLinks } from '../api';
import { fetchRelationships } from './accounts';
import { importFetchedAccounts } from './importer';
import { openModal } from './modal';

export const VISITS_FETCH_REQUEST = 'VISITS_FETCH_REQUEST';
export const VISITS_FETCH_SUCCESS = 'VISITS_FETCH_SUCCESS';
export const VISITS_FETCH_FAIL    = 'VISITS_FETCH_FAIL';

export const VISITS_EXPAND_REQUEST = 'VISITS_EXPAND_REQUEST';
export const VISITS_EXPAND_SUCCESS = 'VISITS_EXPAND_SUCCESS';
export const VISITS_EXPAND_FAIL    = 'VISITS_EXPAND_FAIL';

export const VISITS_INIT_MODAL = 'VISITS_INIT_MODAL';

export function fetchVisits() {
  return (dispatch, getState) => {
    dispatch(fetchVisitsRequest());

    api(getState).get('/api/v1/visits').then(response => {
      const next = getLinks(response).refs.find(link => link.rel === 'next');
      dispatch(importFetchedAccounts(response.data));
      dispatch(fetchVisitsSuccess(response.data, next ? next.uri : null));
      dispatch(fetchRelationships(response.data.map(item => item.id)));
    }).catch(error => dispatch(fetchVisitsFail(error)));
  };
};

export function fetchVisitsRequest() {
  return {
    type: VISITS_FETCH_REQUEST,
  };
};

export function fetchVisitsSuccess(accounts, next) {
  return {
    type: VISITS_FETCH_SUCCESS,
    accounts,
    next,
  };
};

export function fetchVisitsFail(error) {
  return {
    type: VISITS_FETCH_FAIL,
    error,
  };
};

export function expandVisits() {
  return (dispatch, getState) => {
    const url = getState().getIn(['user_lists', 'visits', 'next']);

    if (url === null) {
      return;
    }

    dispatch(expandVisitsRequest());

    api(getState).get(url).then(response => {
      const next = getLinks(response).refs.find(link => link.rel === 'next');
      dispatch(importFetchedAccounts(response.data));
      dispatch(expandVisitsSuccess(response.data, next ? next.uri : null));
      dispatch(fetchRelationships(response.data.map(item => item.id)));
    }).catch(error => dispatch(expandVisitsFail(error)));
  };
};

export function expandVisitsRequest() {
  return {
    type: VISITS_EXPAND_REQUEST,
  };
};

export function expandVisitsSuccess(accounts, next) {
  return {
    type: VISITS_EXPAND_SUCCESS,
    accounts,
    next,
  };
};

export function expandVisitsFail(error) {
  return {
    type: VISITS_EXPAND_FAIL,
    error,
  };
};

export function initVisitModal(account) {
  return dispatch => {
    dispatch({
      type: VISITS_INIT_MODAL,
      account,
    });

    console.log("無駄なコード");
    dispatch(openModal('VISIT'));
  };
}
