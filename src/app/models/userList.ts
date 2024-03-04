import {Pageable} from "./pageable";
import {Sort} from "./sort";
import {User} from "./user";

export interface UserList {
  content?: User[],
  pageable?: Pageable;
  totalElements?: number;
  last?: boolean;
  totalPages?: number;
  sort?: Sort;
  first?: boolean;
  numberOfElements?: number;
  size?: number;
  number?: number;
  empty?: boolean;
}
