import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "NextJS to Astro: more control = faster sites",
  "publishedAt": "2022-08-15T14:53:56.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/PSzCtdM20Fc/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/PSzCtdM20Fc/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/PSzCtdM20Fc/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/PSzCtdM20Fc/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/PSzCtdM20Fc/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["nextJS", "next js", "NextJS", "next js astro", "NextJS astro", "astro next js", "next js to astro", "blue collar coder", "jack herrington next js", "jack herrington astro", "next js typerscript", "NextJS Astro", "NextJS to Astro", "nextjs to astro", "nextjs astro", "astro ssr", "astro server side rendering", "nextjs ssr", "nextjs server side rendering", "islands architecture", "nextjs islands architecture", "astro islands architecture"],
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
    children: "How Astro makes site that are blazingly fast with ease."
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
const url = "src/content/videos/PSzCtdM20Fc.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/PSzCtdM20Fc.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
