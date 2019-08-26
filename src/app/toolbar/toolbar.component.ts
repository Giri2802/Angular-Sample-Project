import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Angular Project',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'formgroup',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/template'
          },
          {
            label: 'Tables',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'filtertable'
          },
          {
            label: 'RXJS',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'rxjs'
          },
          {
            label: 'Directives',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'directives'
          },
          {
            label: 'Pipes',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'pipes'
          },
          {
            label: 'Component Communication',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'compcomm'
          },
          {
            label: 'CRUD',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'crud'
          },
          {
            label: 'Dynamic Table',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'dynamicTable'
          }
        ]
      },
      {
        label: 'Type Script',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Type Script',
            icon: 'pi pi-fw pi-external-link',
            routerLink: 'typescript'
          }
        ]
      },
      {
        label: 'Proxy',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'RXJS Using Service Communication', icon: 'pi pi-fw pi-external-link', routerLink:'users' },
          { label: 'Proxy CRUD',  icon: 'pi pi-fw pi-external-link', routerLink:'proxy' },
          { label: 'Authorization',  icon: 'pi pi-fw pi-external-link', routerLink:'login' },
          { label: 'JSON to PDF Conversion',  icon: 'pi pi-fw pi-external-link', routerLink:'jstopdf' }
        ]
      }
    ];
  }
}