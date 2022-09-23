# Food Dash
[![CircleCI](https://circleci.com/gh/yiqu/food-dash/tree/main.svg?style=svg)](https://circleci.com/gh/yiqu/food-dash/tree/main)

## Concepts practiced

- ```useRef(initState)``` - setting a reference to a element to access it later for read operations.
- ```useState(currentState, setStateFunction)``` - setting states and updating states.
- ```ReactDOM.createPortal(content, elementToPortalTo)``` - portaling a child/element to another element via portal's ID.
- ```<React.Fragment />``` - placeholder to avoid div soup
- ```useEffect``` - Runs after every render, and will be triggered by the dependencies array. Clean up runs before useEffect.
- ```useReducer``` - Managing complex states with initial state and dispatching actions to modify states.
- ```useContext``` - Easy to pass states down to nested components without props chaining.
- ```forwardRef``` - Turning a component into a ref() to call its functions from parent.
