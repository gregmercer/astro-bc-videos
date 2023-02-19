import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Top Tech Trends For Web Developers in 2022",
  "publishedAt": "2021-12-13T16:00:05.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/bk5JvHGFv3A/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/bk5JvHGFv3A/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/bk5JvHGFv3A/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/bk5JvHGFv3A/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/bk5JvHGFv3A/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["AI tech tools", "blazor", "blue collar coder", "developer tech trends", "developer tech trends 2022", "developer trends 2022", "headless ui", "jack herrington", "preact", "react 2022", "remix run", "solidjs", "svelte", "tailwind css", "tech trends blue collar coder", "tech trends in 2022", "tech trends jack herrington", "top developer tech trends", "top tech trends", "top tech trends 2022", "top tech trends for developers", "top tech trends for developers in 2022", "top tech trends in 2022", "web 2022", "web dev 2022"],
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
    children: "So much cool stuff is happening in the development space right now, let me tell you what I\u2019m tracking in 2022."
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
const url = "src/content/videos/bk5JvHGFv3A.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/bk5JvHGFv3A.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
