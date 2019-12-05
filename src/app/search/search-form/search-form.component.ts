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

  values = this.formService.getNewObject();

  @Input() regions = [];
  @Input() incomeLevels = [];
  @Input() lendingTypes = [];

  @Output() search = new EventEmitter<object>();

  constructor(fb: FormBuilder, private formService: FormService) {
    this.searchForm = fb.group({
      region: [this.values.region, []],
      incomeLevel: [this.values.incomeLevel, []],
      lendingType: [this.values.lendingType, []],
      nCountries: [this.values.nCountries, [formService.isNotNumber]],
      });
  }

  onSearch() {
    this.values.region =
      this.formService.valueNotNull(this.searchForm.controls.region.value);
    this.values.incomeLevel =
      this.formService.valueNotNull(this.searchForm.controls.incomeLevel.value);
    this.values.lendingType =
      this.formService.valueNotNull(this.searchForm.controls.lendingType.value);
    this.values.nCountries =
      this.searchForm.controls.nCountries.value;
    this.search.emit(this.values);
  }

  hasError(controlName: string, errorName: string) {
    return this.formService.hasError(
      controlName,
      errorName,
      this.searchForm
    );
  }

  ngOnInit() {
  }

}
