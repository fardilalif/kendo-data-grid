import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';
import { Column } from '../../types/product.type';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.css',
})
export class DataGridComponent {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;

  data = input<any>();
  columns = input<Column[]>([]);
  expandField = input<boolean>(false);

  onExpand = output<any>();

  style = input<any>();

  toggleDetail(product: any) {
    this.onExpand.emit(product);
  }
}
