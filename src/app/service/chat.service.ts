import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {Message} from './chat.model';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {pluck} from 'rxjs/internal/operators';

const QUERY_MESSAGES = gql`
query MessageQuery {
  message {
    id
    text
    user {
      username
      firstName
      lastName
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apollo: Apollo) { }

  fetchMessages(): Observable<Array<Message>> {
    const vars = {};
    const query = this.apollo.query<any>({
      query: QUERY_MESSAGES,
      fetchPolicy: 'no-cache',
      variables: vars
    });

    return query.pipe(
      pluck('data', 'message')
    );
  }

}
