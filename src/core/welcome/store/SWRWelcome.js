/* eslint-disable no-unused-vars */
import { useCallback, useMemo } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { welcomeFetcher } from "./welcome-fetcher";


const SWRWelcome = (props) => {

  const welcomeSuccessHandler = useCallback((data, key, config) => {
    props.onWelcomeSucces();
  }, [props]);

  return (
    <SWRConfig 
      value={ {
        fetcher: welcomeFetcher,
        loadingTimeout: 4000,
        onSuccess: welcomeSuccessHandler,
        revalidateOnFocus: true,
        refreshInterval: undefined
      } }>
      { props.children }
    </SWRConfig>
  );
};

export default SWRWelcome;