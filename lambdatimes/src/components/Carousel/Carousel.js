import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled, {css} from 'styled-components';

const WrapCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {width: 1200px}
`
const CarouselBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  ${props =>
    props.left &&
    css`left: 25px`
  }
  ${props =>
    props.right &&
    css`right: 25px`
  }
`
const CarouselImg = styled.img`
  width: 100%;
  display: none;
`

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      active: 0,
    }
  }
  componentDidMount(){
    this.setState({images: carouselData});
  }

  leftClick = () => {
    this.state.active - 1 < 0
      ? this.setState({active: this.state.images.length - 1})
      : this.setState({active: this.state.active - 1})
  }

  rightClick = () => {
    this.state.active + 1 > this.state.images.length - 1
      ? this.setState({active: 0})
      : this.setState({active: this.state.active + 1})
  }

  // selectedImage = () => {
  //   return <CarouselImg src={this.state.images[this.state.active]} style={{display: 'block'}} />
  // }
  
  render(){
    return (
      <WrapCarousel>
        <CarouselBtn left onClick={this.leftClick}>{"<"}</CarouselBtn>
        <CarouselImg src={this.state.images[this.state.active]} style={{display: 'block'}} />
        <CarouselBtn right onClick={this.rightClick}>{">"}</CarouselBtn>
      </WrapCarousel>
    )
  }
}