import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Module Federation with Svelte || Module Federation Tutorial",
  "publishedAt": "2020-09-02T13:53:37.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/nOq1a6-8M-E/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/nOq1a6-8M-E/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/nOq1a6-8M-E/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/nOq1a6-8M-E/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/nOq1a6-8M-E/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["svelte", "react js", "module federation webpack 5", "module federation", "module federation tutorial", "svelte tutorial", "svelte vs react", "sveltejs", "svelte.js", "javascript", "tutorial", "frontend", "sveltejs tutorial", "svelte module federation", "module federation for svelte", "svelte mod fed", "svelte with module federation", "module federation with svelte", "module federation in svelte", "module federation sveltejs", "sveltejs module federation", "svelte module federation crash course"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Checkout how to do Svelte micro-FEs using Module Federation in Webpack 5 by getting two Svelte apps to talk together then adding a React client as well."
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
const url = "src/content/videos/nOq1a6-8M-E.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/nOq1a6-8M-E.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
