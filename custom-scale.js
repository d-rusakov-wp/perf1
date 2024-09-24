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
                    width: 100px;
                    height: 50px;
                    background-color: red;
                    border-radius: 5px;
    
                    &::after {
                      content: '${this.getAttribute('name')}';
                    }
    
                    &::before {
                      content: '${this.getAttribute('percentage')}';
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
