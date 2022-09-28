// eslint-disable-next-line no-unused-vars
import useSWR, { SWRConfig } from 'swr';
import { welcomeFetcher } from "./welcome-fetcher";



const SWRWelcome = (props) => {

  const welcomeSuccessHandler = (data, key, config) => {
  };

  return (
    <SWRConfig 
      value={ {
        fetcher: welcomeFetcher,
        loadingTimeout: 4000,
        onSuccess: welcomeSuccessHandler,
        revalidateOnFocus: true
      } }>
      { props.children }
    </SWRConfig>
  );
};

export default SWRWelcome;