import React, { Component } from 'react';
import { DetailWrapper, Header, Author, Content } from './style';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>标题</Header>
        <Author>作者</Author>
        <Content>那些号称自己有一个想法，只差程序员就能诞生一个改变世界（其中一撮人是想改变自己，
          坐豪车，泡美女）的产品的人，等同于单身已久的人想找一个漂亮女人生小孩。我觉的黑程序员这
          种现象，这些多半都是这个职业群体内的自嘲吧，其实完全不用在意，每个行业都会有混得好和混
          得惨的人，认识的几位程序员都是很正常的人，生活有目标，有追求，积极向上。然而平时加班或
          者写代码的时候确实会比较多，造成了我们会把生活和工作的一些事情放大了说，其实就是一个梗
          ，完全不用在意。

          作者：我选C和CPP
          链接：https://www.jianshu.com/p/ca5ca7dc9a63
          來源：简书
          简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。</Content>
      </DetailWrapper>
    );
  }
}

export default Detail;