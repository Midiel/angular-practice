import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'api/posts';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
      .pipe(
        tap(_ => this.log('fetched posts')),
        catchError(this.handleError<Post[]>('getPosts', []))
      );
  }

  /**
   * 
   * @param id post id passed from the get request
   */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url)
      .pipe(
        tap(_ => this.log(`fetched post id=${id}`)),
        catchError(this.handleError<Post>(`getPost id=${id}`))
      );
  }

  /** POST: add a new post to the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post(this.postsUrl, post, this.httpOptions).pipe(
      tap((newPost: Post) => this.log(`added post w/id=${newPost.id}`)),
      catchError(this.handleError<any>('addPost'))
    );
  }


}
