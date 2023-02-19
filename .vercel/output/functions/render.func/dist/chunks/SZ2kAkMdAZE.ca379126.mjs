import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Visitor and Iterator Patterns in TypeScript (No BS TS Series 2 Episode 3)",
  "publishedAt": "2021-10-04T16:00:12.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/SZ2kAkMdAZE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/SZ2kAkMdAZE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/SZ2kAkMdAZE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/SZ2kAkMdAZE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/SZ2kAkMdAZE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "No BS TS Series 2", "typescript design pattern", "publish and subscribe", "javascript design patterns", "software design patterns", "jack herrington", "jack herrington typescript", "javascript iterator", "typescript visitor pattern", "visitor and iterator pattern in typescript", "No BS TS Series 2 Episode 3", "Typescript Design Patterns", "gof design patterns", "best practice"],
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
    children: "In this third episode of No BS TS series 2 we look at the Visitor & Iterator patterns. These patterns allow you to decouple complex traversal code from computation code. For example you can decoupling paging through an API from the code that does computations on the data returned from the API."
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
const url = "src/content/videos/SZ2kAkMdAZE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/SZ2kAkMdAZE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
