import { Session } from 'botbuilder'
import { TEMPLATES } from '../constants/'

export const introductionDialog = (session: Session, args) => {
  console.log(args.intent)
  session.endDialog(TEMPLATES.introduction())
}

export const INTRODUCTION_DIALOG = 'introductionDialog'