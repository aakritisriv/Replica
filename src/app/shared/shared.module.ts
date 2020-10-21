import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule } from "@angular/router";
import { PrimaryNavComponent } from './components/primary-nav/primary-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, PrimaryNavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PrimaryNavComponent, FooterComponent]
})
export class SharedModule {}
