import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Introducing Module Federation",
  "publishedAt": "2020-06-05T13:56:28.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/x22F4hSdZJM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/x22F4hSdZJM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/x22F4hSdZJM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/x22F4hSdZJM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/x22F4hSdZJM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["webpack-5", "module-federation", "javascript", "react", "module federation", "micro frontends", "javascript tutorial", "web development 2020", "federated modules", "federated modules in webpack 5", "webpack 5", "webpack 5 tutorial", "module federation tutorial", "module federation course", "intro to module federation", "module-federation course", "module-federation tutorial", "learn module federation", "share code with module federation", "module federation crash course"],
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
    children: "Let\u2019s take five minutes to get to know Module Federation, a new code sharing technique that makes it easy to share code between micro-site teams."
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
const url = "src/content/videos/x22F4hSdZJM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/x22F4hSdZJM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
