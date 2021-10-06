import { BooksService } from './shared/books.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CaptializedTextPipe } from './books/pipes/captialized-text.pipe';
import { NgModule } from '@angular/core';
import { bookModule } from './books/book.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    bookModule,
    HttpClientModule

  ],
  /*entryComponents: [EditBookComponent,AddBookComponent,DeleteBookComponent],*/
  providers: [BooksService, CaptializedTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
