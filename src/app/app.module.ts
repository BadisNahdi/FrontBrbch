import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from "primeng/button";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from "primeng/api";


@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, ApiService, InputTextModule, TableModule, TabViewModule, InputTextareaModule, ProgressBarModule, ToastModule, FormsModule, ButtonModule, EditorModule, AccordionModule, BrowserAnimationsModule],
  providers: [ApiService, MessageService],
})
export class AppModule { }