/*import { Component, Input } from '@angular/core';
import { Character } from 'src/app/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
@Input() characterList: Character[]=[]
}*/


import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  @Input() characterList: Character[] = [];
  @Input() currentPage: number = 1;
  @Output() changePage = new EventEmitter<number>();

  emitChangePage(newPage: number) {
    this.changePage.emit(newPage);
  }
}
