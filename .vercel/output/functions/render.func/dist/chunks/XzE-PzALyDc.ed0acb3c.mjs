import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "NextJS + GraphQL Blueprint: Professional Grade Setup",
  "publishedAt": "2022-04-04T14:58:36.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/XzE-PzALyDc/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/XzE-PzALyDc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/XzE-PzALyDc/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/XzE-PzALyDc/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/XzE-PzALyDc/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["graphql tutorial", "graphql", "graphql server", "apollo graphql", "nextjs", "server side rendering", "graphql react", "ssr", "graphql resolvers", "next.js", "Type GraphQL", "GraphQL Code Generation", "react-query and graphql-request", "GraphQL solution for NextJS", "NextJS + GraphQL", "blue collar coder", "Mantine", "next js graphql typescript setup", "next js typescript", "Next js + graphql professional grade setup", "jack herrington next js", "Apollo Server Micro", "next js react query", "type GrahpQL", "nextjs graphql setup"],
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
    children: "We\u2019ll use NextJS, Apollo Server Micro, Type GraphQL, GraphQL Code Generation, react-query and graphql-request to make a completely type safe end-to-end GraphQL solution for NextJS applications."
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
const url = "src/content/videos/XzE-PzALyDc.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/XzE-PzALyDc.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
