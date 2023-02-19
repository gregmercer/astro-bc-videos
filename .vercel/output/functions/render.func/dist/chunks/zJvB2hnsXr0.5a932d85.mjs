import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Four GraphQL Clients Compared",
  "publishedAt": "2020-08-05T14:39:30.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/zJvB2hnsXr0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/zJvB2hnsXr0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/zJvB2hnsXr0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/zJvB2hnsXr0/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["graphql", "javascript", "react", "apollo", "relay", "module federation", "javascript tutorial", "javascript basics", "javascript beginner", "javascript error", "web development", "graphql tutorial", "graphql api", "compare graphql clients", "graphql clients compared", "graphql client comparision", "graphql client", "graphql clients", "graphql clients comparision"],
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
    children: "Let\u2019s check out fetch, graphql-request, Apollo Client, and Relay, all on the same server so that you can see for yourself which one is the right one for your project."
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
const url = "src/content/videos/zJvB2hnsXr0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/zJvB2hnsXr0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
