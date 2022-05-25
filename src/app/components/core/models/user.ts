import { Enseignant } from 'src/app/models/enseignant.model';
import { Image } from '../models/image';
export class User {
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
  enseignant:Enseignant;
}
