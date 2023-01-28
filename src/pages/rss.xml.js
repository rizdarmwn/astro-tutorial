import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
    return rss({
        title: "Astro Learner | Blog",
        description: "My journey learning Astro",
        site: "https://aesthetic-croquembouche-80bb8a.netlify.app/",
        items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
        customData: `<language>en-us</language>`,
    });
}
