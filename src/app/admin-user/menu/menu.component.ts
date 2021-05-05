import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Contact } from 'src/app/admin-user/model/Contact';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  contacts = [];

  constructor(
    private contactService: ContactService,
  ) {}
  ngOnInit(): void {
    this.contactService.getContact().subscribe((data: Contact[]) => {
      console.log(data, 'data');
      this.contacts = data;
    });
  }
}
