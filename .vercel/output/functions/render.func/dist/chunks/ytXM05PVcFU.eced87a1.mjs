import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Is the new React use hook a footgun?",
  "publishedAt": "2022-10-19T14:42:16.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/ytXM05PVcFU/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/ytXM05PVcFU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/ytXM05PVcFU/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/ytXM05PVcFU/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/ytXM05PVcFU/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["use", "react use", "react js use", "reactjs use", "react 18 use", "react18 use", "react use hook", "reactjs use hook", "react 18 use hook", "react promise", "react use hook client side", "react use promise", "reactjs usePromise", "react js usePromise hook", "usePromise hook", "use hook for fetching", "react use hook for fetch"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code"
  }, props.components);
  return createVNode(_components.p, {
    children: ["How to avoid the pitfalls with React 18\u2019s new ", createVNode(_components.code, {
      children: "use"
    }), " hook."]
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
const url = "src/content/videos/ytXM05PVcFU.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/ytXM05PVcFU.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
