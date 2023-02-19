import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Single Spa + Federated Modules = Wow!",
  "publishedAt": "2020-03-13T13:48:42.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/wxnwPLLIJCY/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/wxnwPLLIJCY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/wxnwPLLIJCY/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/wxnwPLLIJCY/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/wxnwPLLIJCY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["webpack-5", "single spa", "react", "javascript", "svelte", "federated modules", "module federation", "micro frontends", "javascript tutorial", "learn javascript", "learn web development", "web development", "web development 2020", "federated modules in webpack 5", "advanced javascript", "webpack", "webpack 5", "webpack 5 tutorial", "federated modules crash course", "single spa and federated modules"],
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
    children: "What do you get when you put Single Spa and Federated Modules in Webpack 5 together? Any framework on any app in a way that makes it much easier to maintain."
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
const url = "src/content/videos/wxnwPLLIJCY.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/wxnwPLLIJCY.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
