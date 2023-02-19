import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Top Tech Trends for 2021",
  "publishedAt": "2020-12-30T14:14:25.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/CZMXRMdHm34/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/CZMXRMdHm34/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/CZMXRMdHm34/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/CZMXRMdHm34/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/CZMXRMdHm34/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["graphql", "ecmascript", "react js", "tailwind css", "blazor", "webassembly", "rome", "assemblyscript", "chakra ui", "monorepo", "next js", "static site generator", "web performance", "react state", "top tech trends 2021", "top tech trends for 2021", "2021 top tech trends", "top tech trends in 2021", "top tech trends for frontend", "top tech trends for web development", "top tech trends in web development"],
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
    children: "Technology trends to learn and watch in 2021 to make you a better engineer and to build your resume."
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
const url = "src/content/videos/CZMXRMdHm34.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/CZMXRMdHm34.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
