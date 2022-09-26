// eslint-disable-next-line no-unused-vars
import { useEffect, useMemo } from 'react';
import usePrevious from '../../shared/hooks/usePrevious';
import styles from './Welcome.module.scss';

// eslint-disable-next-line no-unused-vars
import { useDeepCompareEffect, useShallowCompareEffect, useCustomCompareEffect,
  // eslint-disable-next-line no-unused-vars
  useLifecycles } from 'react-use';
import useWhyDidYouUpdate from '../../shared/hooks/whyDidYouUpdate';

const WelcomeMessage = (props) => {

  useWhyDidYouUpdate("WelcomeMessage", props);

  const prevCount = usePrevious(props);

  // // memoize the value. only change if the name property has changed
  // const memoized = useMemo(() => {
  //   const res = createObject(props);
  //   return res;
  // }, [props]);

  useEffect(() => {
    // only run some code if name changed
    if (prevCount?.user?.name.first !== props.user.name.first) {
      //console.log("running effect for ", props.user.name);
    }
  }, [prevCount?.user?.name, props.user.name]);

  useDeepCompareEffect(() => {
    console.log("effecting ", props.user);
  }, [props]);

  return (
    <div className={ `${styles.parent} poppins container font-weight-bold` }>
      <section className={ `${styles.message} w-100` }>
        <div className={ styles.top }>
          Restaurants and more,
        </div>
        <div className={ styles.bottom }>
          delivered to your door
        </div>
        <div className='w-100 d-flex justify-content-end'>
          <div>
            <div>
              Sincerely,
            </div>
            <div>
              {props.user.name.first}
            </div>
            <div>
              { new Date(props.date).toDateString() }
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