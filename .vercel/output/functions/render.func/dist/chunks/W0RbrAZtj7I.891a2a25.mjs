import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Full Site Federation in Webpack 5",
  "publishedAt": "2020-06-12T21:00:10.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/W0RbrAZtj7I/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/W0RbrAZtj7I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/W0RbrAZtj7I/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/W0RbrAZtj7I/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/W0RbrAZtj7I/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["webpack 5", "module federation", "micro site", "react", "javascript", "spa", "monolith", "micro-site", "single page application", "webpack", "webpack tutorial", "webpack 5 tutorial", "webpack tutorial for beginners", "web development", "federated modules", "code-splitting", "micro-fe", "frontend", "development", "webpack dev server", "webpack guide", "webpack 5 federated modules", "webpack 5 module federation", "module federation webpack 5", "module federation webpack 5 full site", "webpack5 module federation full site"],
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
    children: "When we moved from monoliths to micro-sites we lost out on easy code sharing, single page applications, and it made it much harder to end-to-end test, and to understand the system as a whole. See how Module Federation brings all that back while still maintaining the ability to independently deploy applications."
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
const url = "src/content/videos/W0RbrAZtj7I.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/W0RbrAZtj7I.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
