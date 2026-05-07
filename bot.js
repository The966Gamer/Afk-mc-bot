const mineflayer = require('mineflayer')

const config = {
  host: 'zahomies.mcsh.io',
  port: 25565,
  username: 'MrBot'
}

let bot

function startBot() {
  bot = mineflayer.createBot(config)

  bot.on('spawn', () => {
    console.log('Bot joined 😎')

    startAntiAFK()
    startRandomChat()
  })

  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (shouldIgnore(message)) return

    const msg = message.toLowerCase()

    if (msg.includes('hi') || msg.includes('hello')) {
      bot.chat(`yo ${username} 👋`)
    }

    if (msg.includes('bot')) {
      bot.chat(`im here ${username} 😎`)
    }
  })

  bot.on('end', () => {
    console.log('Disconnected... reconnecting in 5s')
    setTimeout(startBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('Error:', err.message)
  })
}

function shouldIgnore(msg) {
  return /[z1.!]+$/.test(msg.toLowerCase())
}

function startAntiAFK() {
  setInterval(() => {
    if (!bot) return
    bot.setControlState('jump', true)
    setTimeout(() => bot.setControlState('jump', false), 300)
  }, 15000)
}

function startRandomChat() {
  const messages = [
    "if im gone this server dies 💀",
    "im just watching 👀",
    "lowkey carrying the server",
    "who built that 💀",
    "main character energy"
  ]

  function loop() {
    const delay = Math.random() * 120000 + 60000

    setTimeout(() => {
      if (bot && bot.player) {
        const msg = messages[Math.floor(Math.random() * messages.length)]
        bot.chat(msg)
      }
      loop()
    }, delay)
  }

  loop()
}

startBot()