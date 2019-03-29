import React from 'react';
import styled, {css} from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const WrapTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) { width: 1280px; }
`
const ContainLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const ContainRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const TopBarSpan = styled.span`
  cursor: pointer;

  ${ContainLeft} & {
    margin-right: 25%;
    font-weight: bold;
  }
  ${ContainCenter} & {margin-right: 5%}
  ${ContainCenter} &:last-child {margin-right: 0}
  ${ContainCenter} &:hover {text-decoration: underline}
  ${ContainRight} & {}
`

const TopBar = () => {
  return (
    <WrapTopBar>
      <Container>
        <ContainLeft>
          <TopBarSpan>TOPICS</TopBarSpan>
          <TopBarSpan>SEARCH</TopBarSpan>
        </ContainLeft>
        <ContainCenter>
          <TopBarSpan>GENERAL</TopBarSpan>
          <TopBarSpan>BROWNBAG</TopBarSpan>
          <TopBarSpan>RANDOM</TopBarSpan>
          <TopBarSpan>MUSIC</TopBarSpan>
          <TopBarSpan>ANNOUNCEMENTS</TopBarSpan>
        </ContainCenter>
        <ContainRight>
          <TopBarSpan>LOG IN</TopBarSpan>
        </ContainRight>
      </Container>
    </WrapTopBar>
  )
}

export default TopBar;