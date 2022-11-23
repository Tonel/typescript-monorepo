import { isEven } from "@monorepo/utils"
import moment from "moment"

export function FooComponent() {
  // giving a random integer number between 0 and 5
  const randomNumber = Math.floor(Math.random() * 5)
  console.log(`[${moment().toISOString()}] FooComponent: ${randomNumber} -> isEven: ${isEven(randomNumber)}`)

  // UI component implementation ...
}
