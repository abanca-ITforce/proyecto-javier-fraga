import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;
  values = {
  region: '',
  incomeLevel: '',
  lendingType: ''
};

  @Input() regions = [];
  @Input() incomeLevels = [];
  @Input() lendingTypes = [];

  @Output() search = new EventEmitter<object>();

  constructor(fb: FormBuilder, private formService: FormService) {
    this.searchForm = fb.group({
      region: ['', []],
      incomeLevel: ['', []],
      lendingType: ['', []],
      });
  }
  onSearch() {
    this.values.region =
      this.formService.valueNotNull(this.searchForm.controls.region.value);
    this.values.incomeLevel =
      this.formService.valueNotNull(this.searchForm.controls.incomeLevel.value);
    this.values.lendingType =
      this.formService.valueNotNull(this.searchForm.controls.lendingType.value);
    this.search.emit(this.values);
  }
  ngOnInit() {
  }

}
