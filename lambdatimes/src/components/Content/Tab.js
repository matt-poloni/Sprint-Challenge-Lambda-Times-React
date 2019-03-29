import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {text-decoration: underline}
  &.active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
`

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const active = props.tab === props.selectedTab
    ? ' active-tab'
    : ''

  return (
    <WrapTab
      className={`tab${active}`}
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </WrapTab>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
}

export default Tab;
