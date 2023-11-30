export class SiteTheme {
    name: string;
    onThemeLoad: () => void;
    onThemeUnload: () => void;

    constructor(name: string) {
        this.name = name;
        this.onThemeLoad = () => {};
        this.onThemeUnload = () => {};
    }

    load() {
        console.log(`[Theme]: '${this.name}' loaded.`)

        const css = document.createElement('link')
        css.id = 'css-theme';
        css.rel = 'stylesheet';
        css.href = `src/themes/${this.name}/${this.name}.css`;

        document.getElementsByTagName('head')[0].appendChild(css);

        this.onThemeLoad();
    }

    unload() {
        console.log(`[Theme]: '${this.name}' unloaded.`)
        document.getElementById("css-theme")?.remove();
        this.onThemeUnload();
    }
}