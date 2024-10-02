document.addEventListener("DOMContentLoaded", function () {
    if (!hljs) {
        console.error('hljs не найден')

        return;
    }

    hljs.highlightAll();
});
