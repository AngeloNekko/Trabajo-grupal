import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {
  URL: string = "https://finalspaceapi.com/api/v0/quote";
  constructor() { }
  getFrases=()=>fetch(this.URL).then((response)=>response.json());
}
