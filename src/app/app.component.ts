import { Component } from '@angular/core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  isNight = false;
  btnNightMode = faMoon

  socialNetworks = [
    {
      img: faGithub,
      text: "Mi perfil de github",
      link: "https://github.com/andreycattalin/"
    },
    {
      img: faTwitter,
      text: "Mira mi twitter",
      link: "https://twitter.com/andreycattalin"
    },
    {
      img: faLinkedin,
      text: "Mira mi linkedin",
      link: "https://www.linkedin.com/in/andreymarin/"
    },
    {
      img: faGithub,
      text: "Mira de nuevo github",
      link: "https://github.com/andreycattalin/"
    }
  ]

  changeMode() {
    this.isNight = !this.isNight

    if(this.isNight) {
      this.btnNightMode = faSun
    } else {
      this.btnNightMode = faMoon
    }
  }

}
