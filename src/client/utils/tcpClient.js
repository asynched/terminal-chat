import { logSocketMessage, logServerClosedAndExit } from './message.js'

/**
 * Register the event handlers for all the events for the socket
 * @param { import('net').Socket } client Socket client
 */
export const registerClientEvents = (client) => {
  client.on('data', logSocketMessage)
  client.on('close', logServerClosedAndExit)
}
