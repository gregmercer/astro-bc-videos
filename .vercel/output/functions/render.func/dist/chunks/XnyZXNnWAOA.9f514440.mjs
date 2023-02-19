import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #4 - Function Overloading in Typescript",
  "roadmap": "typescript",
  "publishedAt": "2021-04-22T13:40:12.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/XnyZXNnWAOA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/XnyZXNnWAOA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/XnyZXNnWAOA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/XnyZXNnWAOA/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/XnyZXNnWAOA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript", "typescript tutorial", "typescript crash course", "typescript basics", "getting started with typescript", "typescript function overloading", "function overloading in typescript", "function variations in typescript", "overloading functions in typescript", "as keyword in typescript", "typescript as keyword", "typescript function overloading tutorial", "learn typescript function overloading", "typescript function overloading course", "function overloading with typescript", "no bs ts"],
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
    children: "Let\u2019s cover one of Typescript least known features; Function Overloading, and just because it\u2019s lesser known doesn\u2019t mean it\u2019s any less imoprtant."
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
const url = "src/content/videos/XnyZXNnWAOA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/XnyZXNnWAOA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
