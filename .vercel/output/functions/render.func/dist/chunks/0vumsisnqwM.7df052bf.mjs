import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Proxy & Flyweight Patterns - No BS TS Series 2 Episode 5",
  "publishedAt": "2021-11-18T16:00:00.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/0vumsisnqwM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/0vumsisnqwM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/0vumsisnqwM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/0vumsisnqwM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/0vumsisnqwM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "No BS TS Series 2", "typescript design pattern", "javascript design patterns", "software design patterns", "jack herrington", "jack herrington typescript", "Typescript Design Patterns", "gof design patterns", "best practice", "design patterns", "javascript proxy", "typescript proxy", "flyweight design pattern", "design patterns in typescript", "typescript", "proxy pattern typescript", "flyweight pattern typescript"],
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
    children: "We learn how to use the Proxy Design Pattern (and the Proxy object in JavaScript) to listen to key gets and sets in order to create on-demand hydrated objects (Flyweights) and a MobX style state manager."
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
const url = "src/content/videos/0vumsisnqwM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/0vumsisnqwM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
