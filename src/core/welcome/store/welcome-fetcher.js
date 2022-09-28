import * as fromApis from '../../api/MenuApi';

export const WELCOME_FETCHER_ID = 'welcome-message-fetcher';

export const welcomeFetcher = () => {
  return fromApis.getWelcomeMessageArray(['welcome']);
};