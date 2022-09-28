/* eslint-disable no-unused-vars */
import { useCallback, useMemo } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { WELCOME_FETCHER_ID } from '../welcome-fetcher';
import * as fromFirebaseApi from '../../../../shared/rest/fire-rest';


const useWelcome = (opts) => {
  const { data, error, isValidating, mutate } = useSWR(WELCOME_FETCHER_ID);

  const updateWelcomeData = (msg) => {
    fromFirebaseApi.updateWelcome([data.id], msg);
    mutate();
  };

  const messagesFormatted = useMemo(() => {
    const msgs = data?.messages ?? {};
    const keys = Object.keys(msgs).sort();
    const result = [];
    keys.forEach((key) => {
      result.push(msgs[key]);
    });
    return result;
  }, [data?.messages]);
  

  return {
    welcomeData: messagesFormatted,
    isFirstTimeLoading: !error && !data,
    isUpdating: isValidating,
    isError: error,
    setWelcomeData: updateWelcomeData
  };
};

export default useWelcome;