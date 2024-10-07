document.addEventListener('DOMContentLoaded', () => {
  function initScale() {
    class Scale extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        const scale = document.createElement('div');
        const style = document.createElement('style');

        scale.setAttribute('class', 'scale');

        style.textContent = `
          .scale {
            position: relative;
            display: flex;
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
            }

            &::after {
              position: absolute;
              left: 0;
              height: 100%;
              background: repeating-linear-gradient(
                90deg,
                #b3441e,
                #b3441e 20px,
                #fff 20px,
                #fff 24px
              );
              content: '';
              width: ${this.getAttribute('percentage')}%;
            }
          }
        `;

        shadow.appendChild(style);
        shadow.appendChild(scale);
      }
    }

    customElements.define('custom-scale', Scale);
  }

  initScale();
});
