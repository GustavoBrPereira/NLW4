import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body

        const surveysRepository = getCustomRepository(SurveysRepository)

        const surveyAlreadyExists = await surveysRepository.findOne({
            title, description
        })

        if(surveyAlreadyExists) {
            return response.status(400).json({ error: "Survey already exists" })
        }

        const survey = surveysRepository.create({
            title,
            description
        })

        await surveysRepository.save(survey)

        return response.status(201).json(survey)
    }

    async index(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository)

        const surveys = await surveysRepository.find()

        return response.json(surveys)
    }

    async show(request: Request, response: Response) {
        const { id } = request.params

        const surveysRepository = getCustomRepository(SurveysRepository)

        const survey = await surveysRepository.findOne({ id })

        return response.json(survey)
    }
}

export { SurveysController }