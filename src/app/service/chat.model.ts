/**
 * Created by User on 1/21/2020.
 */


export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
}

export class Message {
  id: number;
  user: User;
  text: string;
}
