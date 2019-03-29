import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
const Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
const WrapImg = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
const CardImg = styled.img`
  width: 40px;
`
const Byline = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  return (
    <WrapCard>
      <Headline>
        {props.card.headline /* headline goes here */}
      </Headline>
      <Author>
        <WrapImg>
          <CardImg
            src={props.card.img /* image source goes here */}
            alt=''
          />
        </WrapImg>
        <Byline>
          By {props.card.author /* author goes here */}
        </Byline>
      </Author>
    </WrapCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string,
  })
}

export default Card;
