import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Gender } from '../dual-card.model';

export interface listModified {
  id: number;
  typeOfData: string;
  quantity: number | string;
  gender: string;
  icon?: string;
  src?: string;
  description: string;
  checked?: boolean;
}

@Component({
  selector: 'app-gender-item',
  templateUrl: './gender-item.component.html',
  styleUrls: ['./gender-item.component.css'],
})
export class GenderItemComponent implements OnInit {
  @Input() dataItem;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}

  getColor(gender: string) {
    return gender === 'Women'
      ? '#BA55D3'
      : gender === 'Men'
      ? '#87CEFA'
      : '#D3D3D3';
  }
}
