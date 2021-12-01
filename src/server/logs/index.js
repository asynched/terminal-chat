import path from 'path'
import { createWriteStream } from 'fs'

/**
 * Gets a stream for writing to a server log file
 * @returns { import('fs').WriteStream } A stream for writing to a server log file
 */
export const createServerLogStream = () => {
  const serverLogFilename = `${Date.now()}.log`
  const serverLogStream = createWriteStream(
    path.join('logs', serverLogFilename),
    {
      flags: 'a',
    }
  )

  return serverLogStream
}
