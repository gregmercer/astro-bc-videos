import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Test Driven Development: The best way to code that I almost never use",
  "publishedAt": "2021-11-01T13:59:17.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/EH9Suo_J4Ks/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/EH9Suo_J4Ks/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/EH9Suo_J4Ks/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/EH9Suo_J4Ks/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/EH9Suo_J4Ks/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["test driven development", "test driven development typescript", "test driven development javascript", "tdd", "tdd javascript", "tdd typescript", "tdd react testing library", "react testing library", "testing react hooks", "testing react hooks with react-testing-library", "what is test driven development", "test driven development tutorial", "what is tdd", "jack herrington", "test react componenets", "TDD'ing React hooks", "Testing without Wallaby", "TDD'ing React components"],
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
    children: "Test Driven Development is a fantastic way to build code that you know is well tested and will work. I know I should code this way, but why don\u2019t I? Let\u2019s find out what Test Driven Development is, and see if you should give it a try as we apply it to basic JavaScript and TypeScript functions, custom React hooks and React components."
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
const url = "src/content/videos/EH9Suo_J4Ks.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/EH9Suo_J4Ks.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
