import { FileData } from "./file-data.model";

export class Document {
    id: number;
    titre: string;
    description: string;
    section:string;
    type:string;
    file:FileData;
  
}
