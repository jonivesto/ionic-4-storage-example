import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * @author Joni-Pekka Vesto <https://www.jonivesto.com/>
 * @since 23-03-2019
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private storage: Storage) { }

  // Runs on page load
  ngOnInit(){
    // Save to storage
    this.storage.set('my_key', 'my_value');

    // Load from storage
    this.storage.get('my_key').then((value) => {
      console.log('value for my_key:', value);
    });
  }

}
