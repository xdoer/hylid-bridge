import './style.css'
import { client, platform, mpWebCall, getSystemInfo } from 'hylid-bridge'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div>
      当前 App: ${client}; 当前平台: ${platform}
    </div>

    <button id="counter" type="button">
      点击获取系统信息
    </button>

    <button id="counter2" type="button">
      点击调用自定义 JsApi
    </button>

    <pre id="system"></div>
  </div>
`

document.querySelector<HTMLButtonElement>('#counter')!.addEventListener('click', async () => {
  getSystemInfo({
    success(res) {
      document.querySelector('#system')!.innerHTML = JSON.stringify(res, null, 2)
    },
    fail(err) {
      document.querySelector('#system')!.innerHTML = JSON.stringify(err, null, 2)
    }
  })
})

document.querySelector<HTMLButtonElement>('#counter2')!.addEventListener('click', async () => {
  mpWebCall('__ipc__', {
    data: {
      name: '自定义 JsApi'
    },
    success(res: any) {
      document.querySelector('#system')!.innerHTML = JSON.stringify(res, null, 2)
    },
    fail(err: any) {
      document.querySelector('#system')!.innerHTML = JSON.stringify(err, null, 2)
    }
  })
})
