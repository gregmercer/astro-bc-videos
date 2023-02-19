import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Zack Jackson - Module Federation",
  "publishedAt": "2020-04-10T21:00:03.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/AU7dKWNfWiA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/AU7dKWNfWiA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/AU7dKWNfWiA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/AU7dKWNfWiA/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["webpack", "javascript", "micro-fe", "webpack 5", "module federation", "react", "micro frontends", "javascript tutorial", "learn javascript", "learn web development", "web development", "web development 2020", "federated modules", "federated modules in webpack 5", "advanced javascript", "webpack 5 tutorial", "module federation webpack 5", "module federation in webpack 5"],
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
    children: "Zack is the developer behind module federation in Webpack 5. Find out  about what module federation is, what it\u2019s good for, versioning and more!"
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
const url = "src/content/videos/AU7dKWNfWiA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/AU7dKWNfWiA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
