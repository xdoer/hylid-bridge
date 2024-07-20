import './style.css'
import { client, platform, getSystemInfoAsync } from 'hylid-bridge'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div>
      当前 App: ${client}; 当前平台: ${platform}
    </div>

    <button id="counter" type="button">
      点击获取系统信息
    </button>

    <pre id="system"></div>
  </div>
`

document.querySelector<HTMLButtonElement>('#counter')!.addEventListener('click', async () => {
  const res = await getSystemInfoAsync()
  document.querySelector('#system')!.innerHTML = JSON.stringify(res, null, 2)
})
