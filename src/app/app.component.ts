import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  isNight = false;

  socialNetworks = [
    {
      img: "😃",
      text: "Mi perfil de github",
      link: "https://github.com/andreycattalin/"
    },
    {
      img: "😍",
      text: "Mira mi twitter",
      link: "https://twitter.com/andreycattalin"
    },
    {
      img: "😍",
      text: "Mira mi linkedin",
      link: "https://www.linkedin.com/in/andreymarin/"
    }
  ]

  changeMode() {
    this.isNight = !this.isNight
  }

}
