import net from 'net'
import { executeCLI } from './cli/index.js'
import { lift } from './utils/functional.js'
import { executeStartup } from './utils/startup.js'

const client = net.createConnection({ port: 1337 })
const liftedCLI = lift(executeCLI, client)

executeStartup(console.clear, liftedCLI)
