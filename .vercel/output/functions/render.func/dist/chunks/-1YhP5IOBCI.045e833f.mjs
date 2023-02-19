import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "TypeScript Factory Patterns (No BS TS Series 2 Episode 1)",
  "publishedAt": "2021-09-20T16:00:11.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/-1YhP5IOBCI/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/-1YhP5IOBCI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/-1YhP5IOBCI/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/-1YhP5IOBCI/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/-1YhP5IOBCI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["GoF design patterns", "abstract factory pattern typescript", "best practice", "design pattern", "design patterns", "design patterns in typescript", "factory patterns in typescript", "jack herrington", "no bs ts series 2", "object oriented", "software engineering", "typescript", "typescript crash course", "typescript design patterns", "typescript factory patterns", "typescript tutorial"],
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
    children: "No BS TS is back! With the first in an all new series where we cover all the patterns in the original Design Patterns book (and more). This time we are looking at the factory patterns; Abstract Factory, Builder and Factory Method. All of these patterns help you build reusable well architected code."
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
const url = "src/content/videos/-1YhP5IOBCI.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/-1YhP5IOBCI.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
