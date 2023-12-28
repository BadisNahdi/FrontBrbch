import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, HttpClientModule, ApiService],
    providers: [ApiService],
  })
export class AppModule {}