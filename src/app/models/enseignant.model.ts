import { Image } from '../components/core/models/image';
export class Enseignant {
    id: number;
    username: string;
    password: string;
    nom: string;
    prenom: string;
    email: string;
    accessToken: string;
    profil:string;
    numTel:number;
    role: string[];
    images: Image;
    biography:String;
    specialite:String;
}
