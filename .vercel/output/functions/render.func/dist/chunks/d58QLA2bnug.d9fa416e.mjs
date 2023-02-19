import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Module Federation in NextJS Today!",
  "publishedAt": "2020-07-01T12:53:05.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/d58QLA2bnug/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/d58QLA2bnug/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/d58QLA2bnug/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/d58QLA2bnug/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["nextjs", "module federation", "javascript tutorial", "javascript advanced", "javascript basics", "react js project", "webpack", "module federation in nextjs", "nextjs module federation", "learn module federation with nextjs", "module federation with nextjs course", "module federation nextjs tutorial", "nextjs module federation tutorial", "module federation with nextjs", "nextjs on module federation", "learn module federation and nextjs", "next js module federation crash course", "next js on module federation"],
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
    children: "Learn all about how to use Module Federation, both to expose components and to consume components, with NextJS as it stands today on WebPack 4."
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
const url = "src/content/videos/d58QLA2bnug.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/d58QLA2bnug.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
