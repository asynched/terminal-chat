import readline from 'readline'
import chalk from 'chalk'

/**
 * Gets the input from the terminal
 * @param { { message: string, clearLine: boolean } } options Question to be asked
 * @returns { Promise<string> } The input from the terminal
 */
export const readTerminalInput = ({ message = '', clearLine = false }) => {
  return new Promise((resolve) => {
    const readlineInterface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    readlineInterface.question(message, (answer) => {
      resolve(answer)

      if (clearLine) {
        readline.moveCursor(process.stdout, 0, -1)
        readline.clearLine(process.stdout, 0)
      }

      readlineInterface.close()
    })
  })
}

/**
 *
 * @param { string } message
 * @param { import('net').Socket } client
 */
export const sendMessage = (message, client) => {
  process.stdout.write(
    chalk.bold.green('[MESSAGE]: ') + chalk.bold(message) + '\n'
  )
  client.write(message)
}

/**
 *
 * @param { import('net').Socket } client
 * @returns { (message: string) => void } Lifted send message function
 */
export const liftSendMessage = (client) => {
  return (message) => sendMessage(message, client)
}

/**
 * Logs a message that was sent from the server
 * @param { string } message Message to be logged
 * @returns { void }
 */
export const logSocketMessage = (message) => {
  console.log(chalk.bold.green('[MESSAGE]:'), chalk.bold(message.toString()))
}

/**
 * Logs a server message and exists the process
 */
export const logServerClosedAndExit = () => {
  console.log(chalk.bold.red('\nServer connection is closed, exiting...\n'))
  process.exit(0)
}
