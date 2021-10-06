import { BooksService } from './../../shared/books.service';
import { book } from './../book/book.model';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup;
  nameTaken = false;
  newAssginedID = this.parentData[1];
  currentBooksList = this.parentData[0];

  @Output() onAddEvent = new EventEmitter<any>();

  constructor(
    private dialogRef: MatDialogRef<AddBookComponent>, @Inject(MAT_DIALOG_DATA) public parentData: book,
    private bookservice: BooksService, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      authorName: ['', Validators.required],
      publishedDate: ['', Validators.required],
      bookTitle: ['', Validators.required],
      bookDescription: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.addForm.value.id = this.newAssginedID;
  }


  onSubmit(addForm) {
    if (this.bookservice.isBookExists(addForm.value, this.currentBooksList)) {
      this.nameTaken = true;
    }

    else {
      this.nameTaken = false;
      if (this.addForm.valid) {
        this.dialogRef.close(addForm.value);
      }
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
