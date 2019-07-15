import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 625px;
  height: 270px;
  margin-bottom: 35px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  
  &:hover {
    .arrow {
      display: block;
    }
  }

  .arrow {
    display: none;
    position: absolute;
    width: 40px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(255, 255, 255, .5);
    top: 50%;
    margin-top: -10px;
    
    &.icon-arrow-left {
      border-radius: 0 4px 4px 0;
      left: 0;
    }
    
    &.icon-rightArrow {
      border-radius: 4px 0 0 4px;
      right: 0;
    }
    
    &:hover {
      background: rgba(255, 255, 255, .8);
    }
  }
  
  .slider-img-wrapper {
    width: 3125px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  img {
    display: inline-block;
    width: 625px;
    height: 100%;
    border-radius: 4px;
  }
  
  .slider-btn-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    
    .slider-btn {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      background: rgba(255, 255, 255, .5);
      box-sizing: border-box;
      margin: 0 5px;
      
      &.active {
        background: rgba(255, 255, 255, .8);
      }
    }
  }
`;