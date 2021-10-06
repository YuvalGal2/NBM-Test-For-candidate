import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BooksService } from './../../shared/books.service';
import { book } from './../book/book.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  editForm: FormGroup;
  isEdited: false;
  singleBook: book = this.parentData[0];
  booksList: book[] = this.parentData[1];
  nameInUsed: boolean = false;
  @Output() onUpdate = new EventEmitter<any>();


  constructor(private dialogRef: MatDialogRef<EditBookComponent>, private formBuilder: FormBuilder,
    private bookservice: BooksService, @Inject(MAT_DIALOG_DATA) public parentData: Array<any>) {
    this.editForm = this.formBuilder.group({
      authorName: [this.singleBook.authorName, Validators.required],
      publishedDate: [this.singleBook.publishedDate, Validators.required],
      bookTitle: [this.singleBook.bookTitle, Validators.required],
      bookDescription: [this.singleBook.bookDescription, Validators.required]
    });
  }

  ngOnInit() { }

  onSubmit(editForm) {
    if (this.bookservice.isBookExists(editForm.value, this.booksList) &&
      (!this.editForm.controls.bookTitle.pristine)) {
      this.nameInUsed = true;
    }
    else {
      if (this.editForm.valid) {
        editForm.value.id = this.singleBook.id;
        this.dialogRef.close(editForm.value);
      }
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
