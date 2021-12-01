import net from 'net'
import { createServerLogStream } from './logs/index.js'

/** @type { net.Socket[] } List of all the socket clients connected */
const sockets = []
const serverLogStream = createServerLogStream()

const server = net.createServer((socket) => {
  sockets.push(socket)

  socket.on('data', (data) => {
    serverLogStream.write(`[MESSAGE]: ${data.toString()}\n`)

    sockets
      .filter(($socket) => $socket !== socket)
      .forEach(($socket) => $socket.write(data))
  })

  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1)
  })
})

server.listen(1337)
