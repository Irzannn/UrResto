class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Irzan Luthfi - SIB X Dicoding 2022</p>
      </footer>         
      `;
  }
}

customElements.define('footer-bar', FooterBar);
