// Use relative paths for peer dependencies
import './my-xterm.js';

class MyApp extends LitElement{
  render(){
    return html`
      <my-xterm></my-xterm>
    `;
  }
}
customElements.define('my-app', MyApp);
