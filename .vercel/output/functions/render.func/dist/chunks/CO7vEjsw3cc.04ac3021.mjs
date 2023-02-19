import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Custom Elements in Svelte",
  "publishedAt": "2019-10-18T17:00:33.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/CO7vEjsw3cc/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/CO7vEjsw3cc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/CO7vEjsw3cc/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/CO7vEjsw3cc/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/CO7vEjsw3cc/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["custom-elements", "svelte", "web-components", "bluecollarcoder", "custom elements in svelte", "custom elements in svlete js", "svelte js custom elements", "svelte custom elements", "svelte components into custom elements", "create custom elements in svelte", "custom elements for svelte", "custom elements for svelte js", "svelte js", "svelte web components", "web components in svelte", "web components for svelte", "web components in svelte js", "svelte web components to custom elements"],
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
    children: "Learn how to turn your Svelte components into custom elements in four easy steps."
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
const url = "src/content/videos/CO7vEjsw3cc.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/CO7vEjsw3cc.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
