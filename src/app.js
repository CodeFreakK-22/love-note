// ── Secret PIN (change this!) ──
export const SECRET_PIN = '060105'

// ── Floating hearts ──
export function createHearts() {
    const symbols = ['♥', '❤', '💕', '💗', '💓', '💖', '🩷']
    const colors = ['#e8476a', '#f06292', '#f48fb1', '#e91e63', '#c9956a', '#ef9a9a']
    const count = 28

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div')
        el.className = 'heart-particle'
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)]

        const size = 14 + Math.random() * 28
        const left = Math.random() * 100
        const duration = 8 + Math.random() * 16
        const delay = Math.random() * 18
        const color = colors[Math.floor(Math.random() * colors.length)]

        el.style.cssText = `
        left: ${left}%;
        bottom: 0;
        font-size: ${size}px;
        color: ${color};
        animation-duration: ${duration}s;
        animation-delay: -${delay}s;
        opacity: 0;
    `
        document.body.appendChild(el)
    }
}

// ── Lock / PIN logic ──
export function initLock() {
    let entered = ''
    const lockScreen = document.getElementById('lock-screen')
    const noteScreen = document.getElementById('note-screen')
    const dots = document.querySelectorAll('.pin-dot')
    const errorMsg = document.getElementById('error-msg')
    const lockCard = document.getElementById('lock-card')

    document.getElementById('numpad').addEventListener('click', e => {
        const btn = e.target.closest('.num-btn')
        if (!btn) return

        const key = btn.dataset.key
        if (key === '') return

        if (key === '⌫') {
            entered = entered.slice(0, -1)
        } else if (entered.length < SECRET_PIN.length) {
            entered += key
        }

        updateDots()

        if (entered.length === SECRET_PIN.length) {
            setTimeout(() => checkPin(), 180)
        }
    })

    function updateDots() {
        dots.forEach((d, i) => {
            d.classList.toggle('filled', i < entered.length)
        })
        errorMsg.textContent = ''
    }

    function checkPin() {
        if (entered === SECRET_PIN) {
            lockScreen.classList.add('hidden')
            noteScreen.style.opacity = '1'
            noteScreen.style.pointerEvents = 'auto'
        } else {
            // wrong — shake and reset
            lockCard.classList.remove('shake')
            void lockCard.offsetWidth
            lockCard.classList.add('shake')
            errorMsg.textContent = 'Wrong code — try again 💔'
            entered = ''
            updateDots()
        }
    }
}