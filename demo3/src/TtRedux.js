import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import registerServiceWorker from './registerServiceWorker';

const reducer = (state={ number:0 }, action) => {
  if ('add' === action.type)
    return {number: state.number + 1};
}
const middleware = [createSagaMiddleware()]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

function TtRedux(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.handler}> add </button>
    </div>
  )
}

const mapStateToProps = ( state={ number:0 } ) => {
  return {
    number: state.number
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    handler: e => dispatch({type: 'add'})
  }
}

const App = connect(mapStateToProps, mapDisPatchToProps)(TtRedux)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
