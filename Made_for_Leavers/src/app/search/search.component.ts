/*search.component.ts - Daniel Syrén (20105070)*/
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http_service';
import { University } from '../models/university';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  countries: string[];
  country1: string;
  country2: string;
  country3: string;
  country4: string;
  displayCountries: boolean;
  input: string;
  universities: University[];

  /*constructor(private httpService: HttpService) injects httpService and initialises declared variables.*/
  constructor(private httpService: HttpService) {
    this.countries = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon", "cape verde", "cayman islands", "chad", "chile", "china", "colombia", "congo", "costa rica", "croatia", "cuba", "cyprus", "czech republic", "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", "estonia", "ethiopia", "faroe islands", "fiji", "finland", "france", "french polynesia", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "greenland", "grenada", "guam", "guatemala", "guinea", "guyana", "haiti", "honduras", "hong kong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kuwait", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "namibia", "nepal", "netherlands", "new caledonia", "new zealand", "nicaragua", "niger", "nigeria", "north macedonia", "norway", "oman", "pakistan", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "puerto rico", "qatar", "romania", "russian federation", "rwanda", "samoa", "san marino", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "south africa", "south korea", "spain", "sri lanka", "sudan", "suriname", "swaziland", "sweden", "switzerland", "tajikistan", "thailand", "togo", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "uganda", "ukraine", "united arab emirates", "united kingdom", "united states", "uruguay", "uzbekistan", "vietnam", "yemen", "zambia", "zimbabwe"];
    this.country1 = '';
    this.country2 = '';
    this.country3 = '';
    this.country4 = '';
    this.displayCountries = true;
    this.input = '';
    this.universities = [];
  }

  /*display(json) receives json, hides rotating countries, and displays all the universities in the entered country/city as links to their websites.*/
  display(json: any[]) {
    if (json.length === 0) {
      alert(this.input + " has no university!");
    }
    else {
      this.universities = [];
      this.displayCountries = false;
      for (var i = 0; i < (json.length); i++) {
        var university = new University(json[i].name, json[i].web_pages[0]);
        if (!this.universities.some(u => u.name == university.name)) {
          this.universities.push(university);
        }
      }
    }
  }

  /*ngOnInit() runs rotate() when the search component is initialised.*/
  ngOnInit(): void {
    this.rotate();
  }

  /*returnRandom() generates and returns a random number between 0 and 171.*/
  returnRandom() {
    var max = 171;
    return Math.floor(Math.random() * max) + 1;
  }

  /*rotate() displays 4 random countries determined by returnRandom() and rotates them every 1.8 seconds.*/
  rotate() {
    setInterval(() => {
      this.country1 = this.countries[this.returnRandom()], this.country2 = this.countries[this.returnRandom()], this.country3 = this.countries[this.returnRandom()], this.country4 = this.countries[this.returnRandom()];
    }, 1800);
  }

  /*save(university: University) receives university, calls a method of http_service.ts, and gives a saved alert.*/
  save(university: University) {
    this.httpService.postUniversity(university).subscribe(() => {
      alert(`Saved ${university.name}!`);
    });
  }

  /*search() concatenates entered country/city with the URL to create url that is passed into window.fetch(url).*/
  search() {
    if (this.countries.includes(this.input.toLowerCase()) === true) {
      var url = "http://universities.hipolabs.com/search?country=" + this.input;
      window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => this.display(jsonRes));
    }
    else {
      var url = "http://universities.hipolabs.com/search?name=" + this.input;
      window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => this.display(jsonRes));
    }
  }

}