import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CaptializedTextPipe } from './pipes/captialized-text.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { CommonModule } from '../../../node_modules/@angular/common';
@NgModule({
    declarations: [
        BookComponent,
        BooksComponent,
        EditBookComponent,
        CaptializedTextPipe,
        AddBookComponent,
        DeleteBookComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatDialogModule,
        MatIconModule
    
    ],
    exports: [BooksComponent],
    entryComponents: [EditBookComponent, AddBookComponent, DeleteBookComponent]

})
export class bookModule {

}