import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksService } from './../shared/books.service';
import { book } from './book/book.model';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: book[] = [];
  subscription: Subscription;
  constructor(private bookservice: BooksService, public dialog: MatDialog) { }

  ngOnInit() {
    this.bookservice.getBooksList().subscribe((books) => this.bookList = books);
  }

  getBookIndexById(id) {
    return this.bookList.findIndex((book) => book.id === id);
  }

  onModifyUpdate(modifiedBook: book) {
    let bookIndex = this.getBookIndexById(modifiedBook.id);
    this.bookList[bookIndex] = modifiedBook;
  }


  onDeleteUpdate(book: book) {
    this.bookList = this.bookList.filter((singleBook) => singleBook.id !== book.id);
  }



  onClickCreate() {
    const dialogRef = this.dialog.open(AddBookComponent, {
      width: '600px',
      data: [this.bookList, this.bookservice.getCurrentId(this.bookList) + 1]
    });

    this.subscription = dialogRef.afterClosed().subscribe((bookObject) => {
      if (bookObject) {
        bookObject.id = this.bookservice.getCurrentId(this.bookList) + 1;
        this.bookList.unshift(bookObject);
        console.log(this.bookList.length);
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

