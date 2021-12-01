import chalk from 'chalk'
import { registerClientEvents } from '../utils/tcpClient.js'
import { readTerminalInput, liftSendMessage } from '../utils/message.js'

/**
 * Executes the CLI
 * @param { import('net').Socket } client Client socket
 */
export const executeCLI = async (client) => {
  const sendMessage = liftSendMessage(client)
  const name = await readTerminalInput({
    message: chalk.bold('What is your name? '),
  })

  console.log(
    chalk.green.bold('\n[SESSION STARTED]'),
    chalk.bold('\nType something in the console to broadcast to the room.\n')
  )

  registerClientEvents(client)

  while (true) {
    const message = await readTerminalInput({ clearLine: true })
    sendMessage(`${name} - ${message}`)
  }
}
