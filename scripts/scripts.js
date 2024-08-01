document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("nav input");
    searchInput.addEventListener("keyup", () => {
        console.log(`Searching for: ${searchInput.value}`);
    });
});
