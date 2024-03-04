import {Answer} from "./answer";
import {Language} from "./language";

export interface User {
  address?: string;
  age?: number;
  answers?: Answer[];
  bdate?: string;
  created?: string;
  email?: string;
  firstName?: string;
  id?: string;
  language?: Language;
  lastName?: string;
  mobile?: string;
  profileImage?: string;
  sex?: string;
  status?: string;
  updated?: string;
}
