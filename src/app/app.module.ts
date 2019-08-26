import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { ChipsModule } from 'primeng/chips';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { ListboxModule } from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { InputMaskModule } from 'primeng/inputmask';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CustomvalidationDirective } from './customvalidation.directive';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { Formchild1Component } from './form-group/formchild1/formchild1.component';
import { Formchild2Component } from './form-group/formchild2/formchild2.component';
import { Formchild3Component } from './templateform/formchild3/formchild3.component';
import { Formchild4Component } from './templateform/formchild4/formchild4.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ListComponent } from './list/list.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CarService } from './carservice.service';
import { DirectivesComponent } from './directives/directives.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DropdirectiveDirective } from './dropdirective.directive';
import { PipessampleComponent } from './pipessample/pipessample.component';
import { CustpipePipe } from './custpipe.pipe';
import { DatepipePipe } from './datepipe.pipe';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ChildoneComponent } from './componentcommunication/childone/childone.component';
import { ChildtwoComponent } from './componentcommunication/childtwo/childtwo.component';
import { ChildthreeComponent } from './componentcommunication/childthree/childthree.component';
import { CrudComponent } from './crud/crud.component';
import { EmployeeinfoService } from './Services/employeeinfo.service';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { WebUrls } from './Shared/urlFile';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProxycrudComponent } from './proxycrud/proxycrud.component';
import { ProxyData } from './proxycrud/proxyModel';
import { PaginatorModule } from 'primeng/paginator';
import { AuthenticationModule } from './authentication/authentication.module';
import { JsontopdfComponent } from './jsontopdf/jsontopdf.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomvalidationDirective,
    FormGroupComponent,
    Formchild1Component,
    Formchild2Component,
    Formchild3Component,
    Formchild4Component,
    TemplateformComponent,
    FilterTableComponent,
    PageNotFoundComponent,
    HomePageComponent,
    ToolbarComponent,
    HomeComponent,
    ListComponent,
    RxjsComponent,
    DirectivesComponent,
    DropdirectiveDirective,
    PipessampleComponent,
    CustpipePipe,
    DatepipePipe,
    ComponentcommunicationComponent,
    ChildoneComponent,
    ChildtwoComponent,
    ChildthreeComponent,
    CrudComponent,
    EmployeeDetailComponent,
    AddEmployeeComponent,
    DynamicTableComponent,
    TypescriptComponent,
    UserComponent,
    UsersComponent,
    UserFormComponent,
    ProxycrudComponent,
    JsontopdfComponent,
  ],
  imports: [
    PaginatorModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    AppRoutingModule,
    PanelMenuModule,
    InputTextModule,
    ToggleButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    PasswordModule,
    ChipsModule,
    AutoCompleteModule,
    FormsModule,
    CalendarModule,
    KeyFilterModule,
    MultiSelectModule,
    DropdownModule,
    AccordionModule,
    CheckboxModule,
    SliderModule,
    ListboxModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    RadioButtonModule,
    SidebarModule,
    InputMaskModule,
    FieldsetModule,
    ProgressSpinnerModule,
    InputSwitchModule,
    ToolbarModule,
    AuthenticationModule
  ],
  providers: [
    CarService,
    EmployeeinfoService,
    MessageService,
    WebUrls,
    ProxyData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
