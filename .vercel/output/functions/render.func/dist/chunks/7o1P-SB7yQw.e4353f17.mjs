import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS - Challenge 3",
  "publishedAt": "2021-05-18T13:01:16.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/7o1P-SB7yQw/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/7o1P-SB7yQw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/7o1P-SB7yQw/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/7o1P-SB7yQw/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/7o1P-SB7yQw/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript", "typescript tutorial", "typescript vs javascript", "typescript crash course", "typescript basics", "getting started with typescript", "beginning typescript", "typescript challenge", "typescript challenges", "no bs ts challenge", "typescript basic challenges", "no bs ts typescript challenge", "no bs ts challenge 2", "advanced typescript challenge", "advanced typescript solutions", "basic typescript challenges"],
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
    children: "Let\u2019s challenge ourselves to make an event processing engine using generics and mapped types."
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
const url = "src/content/videos/7o1P-SB7yQw.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/7o1P-SB7yQw.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
