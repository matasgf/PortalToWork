import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private jobService: JobsService) { }

  ngOnInit() {
  }

}
