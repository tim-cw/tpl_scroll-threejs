import Experience from './Experience.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');
    Icons.load();

    //new Experience();
  }
}
new Main();
