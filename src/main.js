import './style.css'
import { createHearts, initLock, SECRET_PIN } from './app.js'

document.querySelector('#app').innerHTML = `
  <!-- Background mesh -->
  <div id="bg-mesh"></div>

  <!-- Lock screen -->
  <div id="lock-screen">
    <div class="lock-card" id="lock-card">
      <div style="font-size:2.2rem; margin-bottom:0.6rem;">🔐</div>
      <h2>For Your Eyes Only</h2>
      <p>Enter the secret code to unlock your note</p>

      <div class="pin-dots" id="pin-dots">
        ${Array.from({ length: SECRET_PIN.length }, (_, i) =>
  `<div class="pin-dot" data-i="${i}"></div>`
).join('')}
      </div>

      <div class="numpad" id="numpad">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map(k => `
          <button class="num-btn${k === '⌫' ? ' del' : ''}" data-key="${k}">${k}</button>
        `).join('')}
      </div>
      <div class="error-msg" id="error-msg"></div>
    </div>
  </div>

    <div id="note-screen" style="opacity:0; pointer-events:none;">
    <div class="note-card">
      <div class="note-tag">✦ a secret note ✦</div>
      <h1 class="note-title">Dearest <em>Smita</em>,</h1>
      <div class="note-divider"></div>
      <p class="love-text">I Love You Till Eternity ♥</p>
      <p class="note-signature">— Shagun</p>
      <div class="wax-seal">♥</div>
    </div>
  </div>
`

createHearts()
initLock()