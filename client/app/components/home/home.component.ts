import template from './home.html!text';
import './home.css!';

//@Component( {
//  selector: 'home'
//} )
//@View( {
//  template: template
//} )
class HomeComponent {
  name: string;

  private static selector = 'home';
  private static template = template;
  private static options = {};

  constructor() {
    this.name = 'home';
  }

}

export default HomeComponent;
