export class BackButtonComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML() {
        return `<button id="back-button" class="btn btn-primary" type="button">Назад</button>`;
    }

    addListeners(listener) {
        document.getElementById("back-button").addEventListener("click", listener);
    }

    render(listener) {
        this.parent.insertAdjacentHTML('beforeend', this.getHTML());
        this.addListeners(listener);
    }
}
