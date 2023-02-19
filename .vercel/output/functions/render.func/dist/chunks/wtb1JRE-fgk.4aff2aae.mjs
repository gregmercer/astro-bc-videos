import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Islands Architecture, Web Devs Next Big Thing",
  "publishedAt": "2023-01-20T15:17:22.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/wtb1JRE-fgk/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/wtb1JRE-fgk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/wtb1JRE-fgk/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/wtb1JRE-fgk/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/wtb1JRE-fgk/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["astro", "deno", "deno fresh", "astrojs", "astro 2", "islands architecture", "react hydration", "nextjs hydration", "nextjs performance", "web performance", "website performance", "software architecture", "software engineering", "What is Island Architecture", "Jamstack island architecture", "astro island architecture", "island architecture tutorial", "island architecture", "island architecture explainer", "astro.build", "ship no js"],
  "privacyStatus": "public",
  "short": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Bundle sizes and hydration problems are killing web applications. See how Islands Architecture flips all that on its head and allows you to still use JavaScript to render your page. While still having \u201Cislands\u201D of dynamic behavior on the client."
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/videos/wtb1JRE-fgk.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/wtb1JRE-fgk.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
