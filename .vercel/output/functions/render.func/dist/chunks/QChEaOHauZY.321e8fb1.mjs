import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "GraphQL/JWT Speed Run with Refresh Tokens",
  "publishedAt": "2021-10-28T15:15:33.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/QChEaOHauZY/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/QChEaOHauZY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/QChEaOHauZY/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/QChEaOHauZY/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/QChEaOHauZY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["apollo graphql jwt authentication", "axios jwt", "axios react", "axios refresh token interceptor", "graphql", "graphql jwt", "jack herrington", "jwt", "jwt authentication", "jwt refresh token", "jwt tutorial", "react jwt authentication", "react query", "react query authentication", "react query tutorial", "refresh token", "refresh token jwt"],
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
    children: "In just thirty minutes learn how to get JSON Web Token authentication running in GraphQL using refresh tokens, Axios and React Query!"
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
const url = "src/content/videos/QChEaOHauZY.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/QChEaOHauZY.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
