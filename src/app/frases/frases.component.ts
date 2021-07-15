import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FrasesService } from '../servicios/frases.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-frases',
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent implements OnInit {
  frases: Array<any>=[];
  search: any;
  
  constructor(private service: FrasesService) { }

  ngOnInit(): void {
    this.search="";
    this.service.getFrases()
    .then(data =>{
      this.frases=data      
    });
    }
  }
