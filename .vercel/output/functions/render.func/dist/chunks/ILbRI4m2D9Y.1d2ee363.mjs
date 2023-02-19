import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Vue 3 Micro-FEs: State, Routing & More!",
  "publishedAt": "2022-02-22T15:54:40.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/ILbRI4m2D9Y/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/ILbRI4m2D9Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/ILbRI4m2D9Y/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/ILbRI4m2D9Y/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/ILbRI4m2D9Y/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Vue 3", "Vue 3 micro frontends", "vue micro frontend", "Vue 3 Micro-FEs", "Vue 3 state", "Vue 3 routing", "blue collar coder", "jack herrington vue 3", "vue 3 routing", "vue 3 route", "vue 3 async loading", "Vue 3 MFE Async Loading", "Vue 3 MFE Sharing State", "Vue 3 sharing state", "Vue 3 MFE Routing", "vue 3 state sharing", "Vue MFE Sharing State", "Vue MFE Routing", "MFE Async Loading", "Vue", "vue js micro frontends", "micro frontend vue 3", "micro frontend vue js", "vue 3 sharing components", "vue 3 micro frontend"],
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
    children: "Find out just how easy it is to share Vue3 components and data stores as runtime dependencies using Module Federation."
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
const url = "src/content/videos/ILbRI4m2D9Y.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/ILbRI4m2D9Y.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
