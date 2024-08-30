import { Request, Response } from 'express';
import model from '../models/GenerativeModel';

class TextController {
    async getText(req: Request, res:Response) {
        try {
            const prompt = req.body.prompt;
            const response = await model.generateContent(prompt);
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(400).json({"Error": "Erro ao gerar conteúdo!"})
        }
    }
}

export default new TextController()