import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "DIY Performance Data Gathering Chrome Extension",
  "publishedAt": "2020-11-16T01:50:17.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/5WbpZlJCWNk/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/5WbpZlJCWNk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/5WbpZlJCWNk/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/5WbpZlJCWNk/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/5WbpZlJCWNk/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["vanilla javascript", "chrome extension tutorial", "chrome extension development", "web performance", "web performance testing", "javascript", "vanilla javascript project", "vanilla js", "web development", "build a chrome extension", "how to make a chrome extension", "vanilla javascript projects", "javascript chrome extension", "build javascript chrome extension", "performance javascript extension", "build performance javascript extension", "vanilla javascript performance extension"],
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
    children: "Let\u2019s build a Chrome extension that gathers performance metrics from the pages you browse around then gives you a popup display you can use to compare metrics between competitor sites."
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
const url = "src/content/videos/5WbpZlJCWNk.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/5WbpZlJCWNk.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
