import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDividerModule} from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {PortfolioCardComponent} from "./home/components/portfolio-card/portfolio-card.component";
import {SkillsComponent} from "./home/components/skills/skills.component";
import {LanguagesComponent} from "./home/components/languages/languages.component";
import {ContactFormComponent} from "./home/components/contact-form/contact-form.component";
import {TabComponent} from "./home/components/tab/tab.component";
import {GalleryImgComponent} from "./gallery/components/gallery-img/gallery-img.component";
import {GalleryComponent} from "./gallery/components/gallery/gallery.component";
import {HomeComponent} from './home/components/home/home.component';
import {AboutComponent} from './about/components/about/about.component';
import {ToolbarComponent} from './shared/components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SidenavComponent} from './shared/components/sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { GalleryCardComponent } from './gallery/components/gallery-card/gallery-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,

    HomeComponent,
    PortfolioCardComponent,
    SkillsComponent,
    LanguagesComponent,
    ContactFormComponent,
    TabComponent,
    GalleryImgComponent,
    GalleryComponent,

    AboutComponent,
      GalleryCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,

    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
