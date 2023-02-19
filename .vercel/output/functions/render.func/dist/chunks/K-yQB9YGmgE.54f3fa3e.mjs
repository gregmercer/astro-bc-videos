import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "How to build a resilient shared Header/Footer using Module Federation",
  "publishedAt": "2020-06-20T16:35:34.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/K-yQB9YGmgE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/K-yQB9YGmgE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/K-yQB9YGmgE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/K-yQB9YGmgE/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["javascript", "module federation", "react", "micro site", "enterprise architecture", "enterprise architect tutorial", "micro-frontend", "micro-frontend architecture", "e-commerce", "e-commerce architecture", "micro frontends", "javascript tutorial", "learn javascript", "learn web development", "web development", "web development 2020", "federated modules", "federated modules in webpack 5", "advanced javascript", "webpack", "webpack 5", "webpack 5 tutorial"],
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
    children: "What\u2019s the one thing you need to share between micro-site applications? The Header and the Footer. So how do we share them so that they live update across all of the sites when deployed, but safe enough so that the code intelligently falls back on a functional older version in the case of an issue."
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
const url = "src/content/videos/K-yQB9YGmgE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/K-yQB9YGmgE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
