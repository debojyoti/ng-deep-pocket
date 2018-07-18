import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {
  @Input() newAccType;
  @Input() newAccName;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

}
