class Scale extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const scale = document.createElement('div');

    scale.setAttribute('class', 'scale');

    shadow.appendChild(scale);

    const style = this.renderCSS();

    shadow.appendChild(style);
  }

  renderCSS() {
    const style = document.createElement('style');

    style.textContent = /* CSS */ `
      :host {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 40px;
        background-color: #fff;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        margin-bottom: 15px;
        border: 4px solid #fff;

        &::before {
          transform: translateX(calc(-100% - 15px));
          content: '${this.getAttribute('name')}';
          z-index: 1;
          font: normal 400 24px/1 "Arsenal";
        }

        &::after {
          position: absolute;
          left: 0;
          height: 100%;
          background: repeating-linear-gradient(90deg, #b3441e, #b3441e 20px, #fff 20px, #fff 23px);
          content: '';
          width: ${this.getAttribute('percentage')}%;
        }
      }
    `;

    return style;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  customElements.define('custom-scale', Scale);
});
