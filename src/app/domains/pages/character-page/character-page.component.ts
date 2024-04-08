/*import { Character } from 'src/app/characters.interface';
import { CharactersService } from './../../../services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit{

  characters: Character[] = []
  charactersInLocalStorage= localStorage.getItem('characters')

  constructor(private CharactersService: CharactersService){}

    ngOnInit(): void {
      if(!this.charactersInLocalStorage?.length){
        this.CharactersService.getCharacters().subscribe({next: (response: any)=> {
            console.log(response)
          this.characters = response.results
          localStorage.setItem('characters', JSON.stringify(this.characters))
  
        },
        error:(error) => {
          console.log(error)
        }
      })

      }else{
        this.characters = JSON.parse(this.charactersInLocalStorage!)
      }

  }

}*/
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/characters.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number) {
    this.charactersService.getCharacters(page).subscribe({
      next: (data: any) => {
        this.characters = data.results;
      },
      error: (error) => console.error(error)
    });
  }

  onChangePage(newPage: number) {
    this.currentPage = newPage;
    this.loadCharacters(this.currentPage);
  }


  nextPage() {
    this.onChangePage(this.currentPage + 1);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.onChangePage(this.currentPage - 1);
    }
  }
}