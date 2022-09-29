import axios from 'axios';
import * as fromApis from '../../../shared/rest/fire-rest';

export const WELCOME_FETCHER_ID = 'welcome-message-fetcher';

export const welcomeFetcher = () => {
  return fromApis.getWelcomeMessageArray(['welcome']);
};

export const documentDefaultFetcher = async (props, userId) => {
  return fromApis.getDocument([userId, 'hours-open']);
};

export const axiosFetcher = async (url) => {
  return await axios.get(url)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};