import React from 'react';
import styled from 'styled-components'

export const Switch = (props) => {
  return (
    <StyledSwitch>
      <input
        className="react-switch-checkbox"
        id={`react-switch-${props.name}`}
        type="checkbox"
        defaultChecked={props.defaultValue}
        onChange={props.handleSwitch}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-${props.name}`}
      >
       <span className={`react-switch-button`} />
      </label>
    </StyledSwitch>
  );
};

const StyledSwitch = styled.div`
  display: inline-block;
  vertical-align: top;
  .react-switch-checkbox {
    height: 0;
    width: 0;
    visibility: hidden;
    display: none;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 60px;
    height: 30px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
  }

  .react-switch-label .react-switch-button {
    content: '';
    position: absolute;
    top: 5px;
    left: 8px;
    width: 20px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 8px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 40px;
  }

` 