import { book } from './../books/book/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CaptializedTextPipe } from '../books/pipes/captialized-text.pipe';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl = "./assets/books.json";

  constructor(private http: HttpClient, private pipe: CaptializedTextPipe) { }

  getCurrentId(bookList: book[]) {
    let currentID = 0;
    bookList.map((book) => { book.id >= currentID; currentID = book.id })
    return currentID;
  }
  getBooksList() {
    return this.http.get<book[]>(this.apiUrl);
  }
  isBookExists(book: book, bookList: book[]) {
    const sortedBookObj = this.pipe.transform(book.bookTitle);
    const result = bookList.filter((item) => this.pipe.transform(item.bookTitle) === sortedBookObj);
    return (result.length > 0);
  }

}
