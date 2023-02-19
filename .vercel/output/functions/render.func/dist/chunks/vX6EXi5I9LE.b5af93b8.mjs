import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Module Federation for NextJS 10",
  "publishedAt": "2020-11-04T13:53:29.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/vX6EXi5I9LE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/vX6EXi5I9LE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/vX6EXi5I9LE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/vX6EXi5I9LE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/vX6EXi5I9LE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["module federation webpack 5", "module federation", "webpack", "webpack 5", "web development", "webpack 5 tutorial", "federated modules in webpack 5", "federated modules", "advanced javascript", "javascript", "webpack tutorials", "webpack 5 federated modules", "nextjs", "nextjs 10", "frontend", "module federation on nextjs10", "module federation for nextjs10", "nextjs10 module federation", "mod fed on nextjs10", "next js micro frontend", "nextjs 10 micro frontend", "module federation nextjs crash course"],
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
    children: "Learn how to use Module Federations to export components directly out of your NextJS 10 applications into other NextJS applications. If you are running a micro-site architecture and you want Micro-Frontends, this is a valuable architectural option."
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
const url = "src/content/videos/vX6EXi5I9LE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/vX6EXi5I9LE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
