document.addEventListener("DOMContentLoaded", () => {
    console.log("Theme loader initialized");
    loadThemes();
});


const loadThemeCSS = (file) => {
    console.log(`Loading ${file}`)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = file;
    document.head.appendChild(link);
}

const loadThemes = () => {
    fetch('themes/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'text/xml');
            const folders = xml.querySelectorAll('Contents Key');

            folders.forEach(folder => {
                const folderName = folder.innerHTML;
                if (!folderName.endsWith('/') || folderName.endsWith('.css')) return;

                const themeName = folderName.slice(0, -1);
                loadThemeCSS(themeName);
            });
        })
        .catch(error => console.error('Error fetching themes:', error));

}