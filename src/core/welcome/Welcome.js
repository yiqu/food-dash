/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from 'react';
import usePrevious from '../../shared/hooks/usePrevious';
import styles from './Welcome.module.scss';
import useSWR from 'swr';
import { useDeepCompareEffect, useShallowCompareEffect, useCustomCompareEffect,
  useLifecycles } from 'react-use';
import useWhyDidYouUpdate from '../../shared/hooks/whyDidYouUpdate';
import { WELCOME_FETCHER_ID } from "./store/welcome-fetcher";

const WelcomeMessage = (props) => {

  const { data: welcomeData, error } = useSWR(WELCOME_FETCHER_ID);
  
  const welcomeMessages = useMemo(() => {
    return (
      <React.Fragment>
        { !welcomeData && <div>Loading...</div>}
        { welcomeData && (welcomeData.map((msg, index) => {
          return <div key={ msg } className={ index === 0 ? (styles.top) : (styles.bottom) }>
            { msg }
          </div>;
        })) }
      </React.Fragment>
     
    );
  }, [welcomeData]);

  const refreshWelcomeMessage = () => {
  };

  // useWhyDidYouUpdate("WelcomeMessage", props);

  const prevCount = usePrevious(props);

  useEffect(() => {
    // compare changes by previous values
    if (prevCount?.user?.name.first !== props.user.name.first) {

    }
  }, [prevCount?.user?.name, props.user.name]);


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
            <div>
              <button className="btn btn-outline-light" onClick={ refreshWelcomeMessage }>Refresh</button>
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