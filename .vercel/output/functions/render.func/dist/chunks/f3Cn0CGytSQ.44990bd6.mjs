import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "TypeScript Pub/Sub Patterns (No BS TS Series 2 Episode 2)",
  "publishedAt": "2021-09-30T15:00:11.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/f3Cn0CGytSQ/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/f3Cn0CGytSQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/f3Cn0CGytSQ/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/f3Cn0CGytSQ/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/f3Cn0CGytSQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "No BS TS Series 2", "Pub/Sub design pattern", "Pub/Sub design pattern typescript", "Pub/Sub patterns in typescript", "TypeScript Pub/Sub Patterns", "jack herrington", "javascript design patterns", "observer pattern javascript", "publish and subscribe", "publish and subscribe design pattern", "publish and subscribe in typescript", "publish and subscribe pattern", "software design patterns", "typescript design pattern", "typescript pub sub pattern"],
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
    children: "In this second episode of No BS TS series 2 we look at the Publish & Subscribe pattern (or the Observer pattern as they call it in the book). This pattern allows you to loosen the coupling in your code and maximize reuse, all while making your code easier to understand."
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
const url = "src/content/videos/f3Cn0CGytSQ.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/f3Cn0CGytSQ.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
