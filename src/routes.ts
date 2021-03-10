import { Router } from 'express'

import { SurveysController } from './controllers/SurveysController'
import UserController from './controllers/UserController'
import SendMailController from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController'
import { NpsController } from './controllers/NpsController'

const surveysController = new SurveysController()
const answerController = new AnswerController()
const npsController = new NpsController()

const routes = Router()

routes.post('/users', UserController.create)

routes.post('/surveys', surveysController.create)
routes.get('/surveys', surveysController.index)
routes.get('/surveys/:id', surveysController.show)

routes.post('/sendMail', SendMailController.send)

routes.get('/answers/:value', answerController.execute)

routes.get('/nps/:survey_id', npsController.execute)


export default routes