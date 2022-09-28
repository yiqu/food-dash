/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect, useReducer, useMemo } from "react";
import ReactDOM from 'react-dom';
import * as fromWelcomeReducer from './WelcomeReducer';
import * as fromWelcomeActions from './WelcomeActions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { convertDataToCollection, mapToDataWithId } from '../../store/firebase-utils';
import { axiosPost, axiosGet } from '../../../shared/rest/axios-rest';
import { useUpdateEffect, useEffectOnce } from 'react-use';
import SWRWelcome from "./SWRWelcome";
import useSWR from 'swr';
import { WELCOME_FETCHER_ID } from './welcome-fetcher';
import useWhyDidYouUpdate from '../../../shared/hooks/whyDidYouUpdate';


const WelcomeContext = React.createContext({
});

export const WelcomeProvider = (props) => {
  //useWhyDidYouUpdate("WelcomeProvider", props)

  const [welcomeState, dispatchWelcomeAction] = useReducer(fromWelcomeReducer.welcomeReducer,
    fromWelcomeReducer.welcomeInitialState);


  return (
    <WelcomeContext.Provider 
      value={ {
      } } >
        
      { props.children }
      
    </WelcomeContext.Provider>
  );

};


export default WelcomeContext;