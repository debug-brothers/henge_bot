import { sample, reduce } from 'lodash'
import { IStringArrayMap } from '../interfaces/'

const stringTemplates: IStringArrayMap = {
  greeting: [
    'Hi', 'Hello', 'Cheers', 'Aloha'
  ],
  help: [
    `It's my pleasure to serve you. To get started, you can say things like: I want to report an incident.`
  ]
}

export const TEMPLATES = reduce(stringTemplates, (result, value: string[], key: string) => {
  result[key] = sample.bind(null, value)
  return result
}, {})