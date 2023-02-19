import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Micro-FEs Simplified",
  "publishedAt": "2020-12-23T15:07:03.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/tFDvEITdJZ8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/tFDvEITdJZ8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/tFDvEITdJZ8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/tFDvEITdJZ8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/tFDvEITdJZ8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["module federation webpack 5", "module federation", "webpack", "webpack 5", "federated modules in webpack 5", "federated modules", "webpack tutorial", "webpack 5 federated modules", "micro frontend", "micro frontend architecture", "micro frontends", "micro frontend react", "micro-fe", "module federation for micro frontends", "micro frontend module federation", "micro fe simplified", "micro frontend simpilified", "micro fe", "mod fed micro fe", "mod fed for micro fe"],
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
    children: "Let\u2019s use Module Federation to make Micro-Frontends easy!"
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
const url = "src/content/videos/tFDvEITdJZ8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/tFDvEITdJZ8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
