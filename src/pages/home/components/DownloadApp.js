import React, { PureComponent } from 'react';
import { DownloadApp } from "../styled";

class AppDownload extends PureComponent {
  render() {
    return (
      <div>
        <DownloadApp target="_blank" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
          <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
          <div className="info">
            <div className="info-title">
              下载简书手机App>
            </div>
            <div className="description">随时随地发现和创作内容</div>
          </div>
        </DownloadApp>
      </div>
    );
  }
}

export default AppDownload;