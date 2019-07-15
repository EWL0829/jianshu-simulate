import React, { PureComponent } from 'react';
import { SliderContainer } from './style';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { actionCreators } from './store';

class Slider extends PureComponent {

    render () {
        const { imgList, imgListPage, turnPrev, turnNext } = this.props;

        return (
            <SliderContainer className='slider-container'>
               <div className="slider-img-wrapper" ref={ref => this.imgWrapper = ref}>
                   {
                       imgList.map((item, index) => {
                           return (
                               <img key={index} src={item} alt="图片加载失败"/>
                           )
                       })
                   }
               </div>
                <i className="iconfont prev arrow icon-arrow-left" onClick={() => turnPrev(this.imgWrapper)}></i>
                <i className="iconfont next arrow icon-rightArrow" onClick={() => turnNext(this.imgWrapper)}></i>
                <ul className="slider-btn-box">
                    {
                        imgList.map((item, index) => {
                            const itemCls = classNames('slider-btn', {
                                'active': index === imgListPage
                            });
                            return (
                                <li key={index} className={itemCls}></li>
                            )
                        })
                    }
                </ul>
            </SliderContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        imgList: state.getIn(['slider', 'imgList']).toJS(),
        imgListPage: state.getIn(['slider', 'imgListPage']),
    }
};

const mapDispatchToProps = (dispatch) => ({
    turnNext(node) {
        console.log('node', node);
        // const action = actionCreators.turnNext();
        // dispatch(action);
    },
    turnPrev() {

    }
});

export default connect(mapStateToProps, null)(Slider);