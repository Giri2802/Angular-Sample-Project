import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { FilterTableComponent } from './filter-table/filter-table.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { Formchild1Component } from './form-group/formchild1/formchild1.component';
import { Formchild2Component } from './form-group/formchild2/formchild2.component';
import { Formchild3Component } from './templateform/formchild3/formchild3.component';
import { Formchild4Component } from './templateform/formchild4/formchild4.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListComponent } from './list/list.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipessampleComponent } from './pipessample/pipessample.component';
import { ComponentcommunicationComponent } from './componentcommunication/componentcommunication.component';
import { ChildoneComponent } from './componentcommunication/childone/childone.component';
import { ChildtwoComponent } from './componentcommunication/childtwo/childtwo.component';
import { ChildthreeComponent } from './componentcommunication/childthree/childthree.component';
import { CrudComponent } from './crud/crud.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { UsersComponent } from './users/users.component';
import { ProxycrudComponent } from './proxycrud/proxycrud.component';
import { LoginComponent } from './authentication/login/login.component';
import { JsontopdfComponent } from './jsontopdf/jsontopdf.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  // {path: '', redirectTo:'/formgroup', pathMatch:'full'},

  // {path: '', redirectTo:'/formgroup', pathMatch:'prefix'},//It Displays only Formgroup Component
  {
    path: 'formgroup', component: FormGroupComponent,
    children: [
      { path: 'fchild1', component: Formchild1Component },
      { path: 'fchild2', component: Formchild2Component }
    ]
  },
  { path: 'filtertable', component: FilterTableComponent },
  {
    path: 'template', component: TemplateformComponent,
    children: [
      { path: 'fchild3', component: Formchild3Component },
      { path: 'fchild3/:id', component: ListComponent },
      { path: 'fchild4', component: Formchild4Component }
    ]
  },
  {
    path: 'compcomm', component: ComponentcommunicationComponent,
    children: [
      { path: 'childone', component: ChildoneComponent },
      { path: 'childtwo', component: ChildtwoComponent },
      { path: 'childthree', component: ChildthreeComponent }
    ]
  },
  { path: 'pipes', component: PipessampleComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'empdetail/:id', component: EmployeeDetailComponent },
  { path: 'addemp', component: AddEmployeeComponent },
  { path: 'dynamicTable', component: DynamicTableComponent },
  { path: 'users', component: UsersComponent },
  { path: 'proxy', component: ProxycrudComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jstopdf', component: JsontopdfComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: '**', component: PageNotFoundComponent },/* Wild Card Route */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerImports = [
  FormGroupComponent,
  Formchild1Component,
  Formchild2Component,
  FilterTableComponent,
  TemplateformComponent,
  Formchild3Component,
  Formchild4Component,
  ListComponent,
  PipessampleComponent,
  RxjsComponent,
  DirectivesComponent,
  ComponentcommunicationComponent,
  ChildoneComponent,
  ChildtwoComponent,
  ChildthreeComponent,
  EmployeeDetailComponent,
  ProxycrudComponent,
  TypescriptComponent,
  UsersComponent,
  PageNotFoundComponent] 