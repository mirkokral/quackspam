import * as mc from "minecraft-protocol"
import ora from "ora"
import chalk from "chalk"
import * as rl from "readline"
import * as fs from "fs"
import { config } from "./config.js"
let bots = []
for (let index = 0; index < config.amount; index++) {
  setInterval(() => {
    var bot = mc.createClient(
      {
        username: config.usernames[Math.floor(Math.random() * config.usernames.length)]
      }
    )
  },config.loginDelay * index)
}