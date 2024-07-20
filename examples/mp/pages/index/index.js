import { WebViewBridge } from '@hylid/call'

Page({
  data: {
    url: 'http://localhost:5173?__app__=alipay',
  },
  onLoad() {
    this.webBridge = new WebViewBridge(my.createWebViewContext('hylid'))
  },
  onMessage(e) {
    this.webBridge.listen(e)
  },
})
