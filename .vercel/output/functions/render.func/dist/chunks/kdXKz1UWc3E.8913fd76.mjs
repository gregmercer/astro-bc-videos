import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "NextJS 12.1 SSR & SSG: Everything you need to know",
  "publishedAt": "2022-03-07T15:40:26.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/kdXKz1UWc3E/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/kdXKz1UWc3E/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/kdXKz1UWc3E/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/kdXKz1UWc3E/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/kdXKz1UWc3E/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["next js", "jack herrington next js", "blue collar coder", "next js ssg", "next js ssr", "next js ssr ssg", "next js 12.1", "NextJS 12.1 SSR & SSG", "NextJS SSR & SSG", "Client-Side Rendering", "Client-Side Rendering Explained", "Client-Side Rendering Usecases", "Server-Side Rendering", "next js client side rendering", "next js server side rendering", "Static-Site Generation", "next js static site generation", "Server Side Rendering"],
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
    children: "Server Side Rendering, Static Site Generation, and Client Side Rendering are all supported with NextJS 12.1. Let\u2019s go through all the different modes and explore the new revalidation features in 12 and 12.1."
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
const url = "src/content/videos/kdXKz1UWc3E.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/kdXKz1UWc3E.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
