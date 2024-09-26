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
            background-color: #b3441e;
            border-radius: 15px 5px 15px 5px;
            color: #fff;
            font-weight: bold;
            margin-bottom: 15px;
            border: 2px solid #fff;

            &::before {
              transform: translateX(calc(-100% - 15px));
              content: '${this.getAttribute('name')}';
              z-index: 1;
            }

            &::after {
              border-radius: 15px 5px 15px 5px;
              position: absolute;
              left: 0;
              height: 100%;
              background: repeating-linear-gradient(
                -45deg,
                #18404a,
                #18404a 10px,
                #fff 10px,
                #fff 20px
              );
              background-color: red;
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
