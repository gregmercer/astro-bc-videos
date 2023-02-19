import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "CSR, SSR, and SSG on NextJS",
  "publishedAt": "2020-05-08T14:54:51.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/2tJedF8I-8Q/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/2tJedF8I-8Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/2tJedF8I-8Q/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/2tJedF8I-8Q/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["javascript", "react", "nextjs", "server side rendering", "static site generation", "nextjs ssg", "next js static site generation", "nextjs csr", "next js client side render", "nextjs client side rendering", "next js server side rendering", "NextJS 9.3", "NextJS CSR", "react nextjs ssr", "react nextjs csr", "react nextjs ssg", "nextjs server side rending", "nextjs static site generation", "nextjs ssr"],
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
    children: "Let\u2019s take a single app and build it three ways, with client side rendering (CSR), server side rendering (SSR) and static site generation (SSG) all using NextJS 9.3."
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
const url = "src/content/videos/2tJedF8I-8Q.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/2tJedF8I-8Q.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
