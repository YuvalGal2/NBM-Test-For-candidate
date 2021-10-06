import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeleteBookComponent>) { }
  onConfirm() {
    this.dialogRef.close(true);
  }
  ngOnInit() {
  }

}
