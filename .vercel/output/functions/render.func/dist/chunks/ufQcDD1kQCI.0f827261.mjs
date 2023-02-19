import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Build A Free AI Image Generator Bot in 20 minutes!",
  "publishedAt": "2023-01-10T15:29:25.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/ufQcDD1kQCI/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/ufQcDD1kQCI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/ufQcDD1kQCI/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/ufQcDD1kQCI/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/ufQcDD1kQCI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["ai image", "ai image bot", "ai image generator discord bot", "ai image generator", "AI Image bot", "ai image discord bot", "stable diffusion discord bot", "stable diffusion bot", "ai image generator bot", "AI image bot", "artificial intelligence", "stable diffusion", "ai", "midjourney ai", "stable diffusion ai", "midjourney bot", "midjourney discord bot", "dalle 2 bot", "dalle 2 discord bot"],
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
    children: "Take 20 minutes and find out how to make an Image building AI Discord Bot like MidJourney."
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
const url = "src/content/videos/ufQcDD1kQCI.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/ufQcDD1kQCI.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
