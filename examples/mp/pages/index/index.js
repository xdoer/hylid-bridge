import { WebViewBridge } from '@hylid/call'

Page({
  data: {
    url: 'http://localhost:5173?__app__=alipay',
  },
  onLoad() {
    this.webBridge = new WebViewBridge(my.createWebViewContext('hylid'), {
      blacklist: ['__ipc__'],
      customApi: {
        __ipc__: (options) => {
          options.success({ data: options.data })
        },
      },
    })
  },
  onMessage(e) {
    this.webBridge.listen(e)
  },
})
