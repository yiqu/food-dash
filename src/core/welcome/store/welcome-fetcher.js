import * as fromApis from '../../../shared/rest/fire-rest';

export const WELCOME_FETCHER_ID = 'welcome-message-fetcher';

export const welcomeFetcher = () => {
  return fromApis.getWelcomeMessageArray(['welcome']);
};