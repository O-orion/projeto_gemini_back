import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const APIKEY:string = process.env.API_KEY as string;

console.log(APIKEY)
// Inicialzando Modelo Generativo
const genAI = new GoogleGenerativeAI(APIKEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash'});

export default model;
