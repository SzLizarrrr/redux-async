import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeThunkKiwi } from './actions';

const Demo = props => {
    const display = useSelector(state => state.displayReducer.display);
    const dispatch = useDispatch();

    return (
        <div className="Hello">
            <span>{display}</span>
            <br/>
            <button onClick={() => dispatch({type: 'CHANGE_HELLO', display: 'change'})}>Change Hello</button>
            <br/>
            <button onClick={() => dispatch(changeThunkKiwi())}>Change Thunk kiwi</button>
            <br/>
            <button onClick={() => dispatch({type: 'CHANGE_SAGA'})}>Change Saga kiwi</button>
            <br/>
            <button onClick={() => dispatch({type: 'CHANGE_OBSERVABLE'})}>Change Observerable kiwi</button>
        </div>
    );
};

Demo.propTypes = {
    display: PropTypes.string
};

export default Demo;