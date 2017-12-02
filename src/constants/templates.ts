import { sample, reduce } from 'lodash'
import { IStringArrayMap } from '../interfaces/'

const stringTemplates: IStringArrayMap = {
  greeting: [
    '喵',
    '李小天！我饿了！',
  ],
  introduction: [
    `哼，我就是亨哥！`,
    "本喵，就叫亨哥"
  ]
}

export const TEMPLATES = reduce(stringTemplates, (result, value: string[], key: string) => {
  result[key] = sample.bind(null, value)
  return result
}, {})