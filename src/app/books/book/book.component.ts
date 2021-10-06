import { DeleteBookComponent } from './../delete-book/delete-book.component';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { EditBookComponent } from './../edit-book/edit-book.component';
import { BooksService } from './../../shared/books.service';
import { book } from './book.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  @Input() book;
  @Input() BookList;
  @Output() updateOnModify = new EventEmitter<book>();
  @Output() updateUponDelete = new EventEmitter<book>();
  dialogRef: MatDialogRef<any>
  subscription: Subscription;
  constructor(private bookservice: BooksService, public dialog: MatDialog) { }


  onClickDelete(book: book) {
    //this.updateUponDelete.emit(book);
    this.dialogRef = this.dialog.open(DeleteBookComponent, {
    });
    this.dialogRef.afterClosed().subscribe((action) => {
      if (action) {
        this.updateUponDelete.emit(book);
      }
    })
  }


  onClickEdit(book) {
    this.dialogRef = this.dialog.open(EditBookComponent, {
      width: '600px',
      data: [book, this.BookList]
    });

    this.subscription = this.dialogRef.afterClosed().subscribe((bookObject) => {
      if (bookObject) {
        this.updateOnModify.emit(bookObject);
      }
    });

  }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
