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
  displayCountry: boolean;
  input: string;
  universities: University[];

  /*constructor(private httpService: HttpService) injects httpService and initialises declared variables.*/
  constructor(private httpService: HttpService) {
    this.countries = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bermuda", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon", "cape verde", "cayman islands", "chad", "chile", "china", "colombia", "congo", "costa rica", "croatia", "cuba", "cyprus", "czech republic", "denmark", "djibouti", "dominica", "dominican republic", "ecuador", "egypt", "el salvador", "equatorial guinea", "estonia", "ethiopia", "faroe islands", "fiji", "finland", "france", "french polynesia", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "greenland", "grenada", "guam", "guatemala", "guinea", "guyana", "haiti", "honduras", "hong kong", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kuwait", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "mauritania", "mauritius", "mexico", "monaco", "mongolia", "montenegro", "montserrat", "morocco", "mozambique", "namibia", "nepal", "netherlands", "new caledonia", "new zealand", "nicaragua", "niger", "nigeria", "north macedonia", "norway", "oman", "pakistan", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "puerto rico", "qatar", "romania", "russian federation", "rwanda", "samoa", "san marino", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "south africa", "south korea", "spain", "sri lanka", "sudan", "suriname", "swaziland", "sweden", "switzerland", "tajikistan", "thailand", "togo", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "uganda", "ukraine", "united arab emirates", "united kingdom", "united states", "uruguay", "uzbekistan", "vietnam", "yemen", "zambia", "zimbabwe"];
    this.country1 = 'norway';
    this.country2 = 'united kingdom';
    this.country3 = 'canada';
    this.country4 = 'ireland';
    this.displayCountry = true;
    this.input = '';
    this.universities = [];
  }

  /*displayUniversity(json) receives json, hides rotating countries, and displays all the universities in the entered country/city as links to their websites.*/
  displayUniversity(json: any[]) {
    if (json.length === 0) {
      alert(this.input + " has no university!");
    }
    else {
      this.universities = [];
      this.displayCountry = false;
      for (var i = 0; i < (json.length); i++) {
        var university = new University(json[i].name, json[i].web_pages[0]);
        if (!this.universities.some(u => u.name == university.name)) {
          this.universities.push(university);
        }
      }
    }
  }

  /*ngOnInit() runs rotateCountry() when the search component is initialised.*/
  ngOnInit(): void {
    this.rotateCountry();
  }

  /*returnNumber() generates and returns a random number between 0 and 171.*/
  returnNumber() {
    var max = 171;
    return Math.floor(Math.random() * max) + 1;
  }

  /*rotateCountry() displays 4 random countries determined by returnNumber() and rotates them every 1.71 seconds.*/
  rotateCountry() {
    setInterval(() => {
      this.country1 = this.countries[this.returnNumber()], this.country2 = this.countries[this.returnNumber()], this.country3 = this.countries[this.returnNumber()], this.country4 = this.countries[this.returnNumber()];
    }, 1710);
  }

  /*saveUniversity(university: University) receives university, calls a method of http_service.ts, and gives a saved alert.*/
  saveUniversity(university: University) {
    this.httpService.postUniversity(university).subscribe(() => {
      alert(`Saved ${university.name}!`);
    });
  }

  /*searchC() concatenates entered country/city with the URL to create url that is passed into back-end and into window.fetch(url).*/
  searchC() {
    if (this.countries.includes(this.input.toLowerCase()) === true) {
      var url = "https://madeforleaversms.azure-api.net/University/SearchUniversityCountry/" + this.input;
      window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => this.displayUniversity(jsonRes));
    }
    else {
      var url = "https://madeforleaversms.azure-api.net/University/SearchUniversityCity/" + this.input;
      window.fetch(url)
        .then(urlRes => urlRes.json())
        .then(jsonRes => this.displayUniversity(jsonRes));
    }
  }

  /*searchCountry(countryN) concatenates clicked country with the URL to create url that is passed into back-end and into window.fetch(url).*/
  searchCountry(countryN: string) {
    var url = "https://madeforleaversms.azure-api.net/University/SearchUniversityCountry/" + countryN;
    window.fetch(url)
      .then(urlRes => urlRes.json())
      .then(jsonRes => this.displayUniversity(jsonRes));
  }

}