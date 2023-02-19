import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "tRPC: Smart and Easy APIs",
  "publishedAt": "2022-02-28T16:02:32.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/Lam0cYOEst8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/Lam0cYOEst8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/Lam0cYOEst8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/Lam0cYOEst8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/Lam0cYOEst8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["tRPC", "tRPC nextjs", "tRPC: Smart and Easy APIs", "tRPC/Express API", "blue collar coder", "jack herrington tRpc", "tRPC/Express API + React Client Setup", "trpc Server Setup", "trpc mutations", "tRPC API", "tRPC Subscriptions And NextJS", "trpc react typescript", "react typescript trpc", "trpc CORS", "trpc route inputs", "trpc queries with parameters", "trpc typescript", "smart and easy API", "tRPC Subscriptions", "trpc subscriptions", "trpc tutorial"],
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
    children: "tRPC makes building APIs fast, easy and type-safe. If you want to try your hand at backend or full stack work, this is something you\u2019ll want to try out for yourself!"
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
const url = "src/content/videos/Lam0cYOEst8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/Lam0cYOEst8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
