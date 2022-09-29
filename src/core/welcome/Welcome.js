/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useContext } from 'react';
import usePrevious from '../../shared/hooks/usePrevious';
import styles from './Welcome.module.scss';
import useSWR from 'swr';
import { useDeepCompareEffect, useShallowCompareEffect, useCustomCompareEffect,
  useLifecycles } from 'react-use';
import useWhyDidYouUpdate from '../../shared/hooks/whyDidYouUpdate';
import { defaultFetcher, documentDefaultFetcher, WELCOME_FETCHER_ID } from "./store/welcome-fetcher";
import WelcomeContext from './store/WelcomeContext';
import { generateRandomMessages } from './store/welcome-utils';
import useWelcome from './store/hooks/useWelcome';



const WelcomeMessage = (props) => {

  const welcomeContext = useContext(WelcomeContext);

  const { welcomeData, isError, isFirstTimeLoading, isUpdating, setWelcomeData } = useWelcome();

  const welcomeMessages = useMemo(() => {
    return (
      <React.Fragment>
        { isFirstTimeLoading ? (<div>Loading...</div>) :
          (
            welcomeData.map((msg, index, arr) => {
              return <div key={ msg } className={ index === 0 ? (styles.top) : (styles.bottom) }>
                { msg } { index !== arr.length-1 ? ',' : '' }
              </div>;
            })
          )
        }   
      </React.Fragment>
    );
  }, [welcomeData, isFirstTimeLoading]);

  const refreshWelcomeMessage = () => {
    setWelcomeData(generateRandomMessages());
  };

  // useWhyDidYouUpdate("WelcomeMessage", props);
  const prevCount = usePrevious(props);

  // use deep compare instead
  useDeepCompareEffect(() => {
    // console.log('changes actually happened', props.user.name.first);
  }, [props]);

  return (
    <div className={ `${styles.parent} poppins container font-weight-bold` }>
      <section className={ `${styles.message} w-100` }>
        { welcomeMessages}
        <div className='w-100 d-flex justify-content-between'>
          <div className="d-flex align-items-end">
            <div className='d-flex fs-12 align-items-center font-weight-light'>
              <div>
                <button className="btn btn-outline-light mr-2" onClick={ refreshWelcomeMessage }>Refresh</button>
              </div>
              <div>
                { isUpdating && 'Updating...'}
              </div>
            </div>
          </div>
          <div>
            <div>
              Sincerely,
            </div>
            <div>
              {props.user.name.first}
            </div>
            <div>
              { new Date(props.date).toLocaleTimeString() }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeMessage;

// eslint-disable-next-line no-unused-vars
const createObject = (value) => {
  return {
    name: value.user.name,
    date: value.date
  };
};