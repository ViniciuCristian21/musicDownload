import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string = '';
  constructor() {}

  requestDownloadMusic() {
    try {
      console.log("[Initializing] try request")
      document.location.assign(`https://yt-download-sound.herokuapp.com/download?url=${this.url}`);
    } catch (err) {
      console.log("[ERROR] error console")
      console.log(err.message)
    } finally {
      console.log("[Finally] Finalization of the request");
      this.url = "";
    }
  }

}
