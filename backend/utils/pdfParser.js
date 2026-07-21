import { param } from "express-validator";
import fs from "fs/promises";
import {PDFParse} from "pdf-parse";

/**
 * Extrae el texto de un archivo PDF.
 *
 * @param {string} filePath Ruta del archivo PDF.
 * @returns {Promise<{text: string, numPages: number, info: unknown}>}
 */
export const extractTextFromPDF = async (filePath) => {
    try{
        const dataBuffer = await fs.readFile(filePath);

        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return{
            text: data.text,
            numPages: data.numpages,
            info: data.info,
        };
    } catch (error){
        console.error("PDF parsing error:", error);
        throw new Error("Failed to extract text from PDF");
    }

}; 