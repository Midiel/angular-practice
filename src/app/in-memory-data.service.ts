import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
      { userId: 1,
        id: 1,
        title: "Post 1",
        boddy: "This is the boddy of post 1." },
      { userId: 1,
        id: 2,
        title: "Post 2",
        boddy: "This is the boddy of post 2." },
      { userId: 2,
        id: 3,
        title: "Post 3",
        boddy: "This is the boddy of post 3." },
      { userId: 2,
        id: 4,
        title: "Post 4",
        boddy: "This is the boddy of post 4." },
      { userId: 3,
        id: 5,
        title: "Post 5",
        boddy: "This is the boddy of post 5." },
      { userId: 3,
        id: 6,
        title: "Post 6",
        boddy: "This is the boddy of post 6." }
    ];
    return {posts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}