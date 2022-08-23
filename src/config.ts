import * as crypto from "crypto"
var usernames = []
for (let index = 0; index < 100; index++) {
    usernames.push(crypto.randomBytes(Math.floor(Math.random() * 13) + 3).toString('base64'))
    
}
export const config = {
    usernames,
    amount: 10,
    loginDelay: 1000
}