import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Pokemon Page with React, Fower and Custom Hooks - Part 2",
  "publishedAt": "2021-05-12T13:04:54.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/4cbP95OcfR0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/4cbP95OcfR0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/4cbP95OcfR0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/4cbP95OcfR0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/4cbP95OcfR0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript", "typescript react", "typescript react tutorial", "custom hooks react", "react custom hooks", "react hooks", "fower", "fower react", "react fower app", "react hooks with fower", "react custom hooks with fower", "pokemon app with react and fower", "pokedex app with react and fower", "Pokemon Page with React", "Fower and Custom Hooks", "pokedex with react and fower", "react typescript pokemon page", "react typescript custom hooks", "react pokemon page", "typescript react custom hooks"],
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
    children: "We finish off our Pokemon search page using Fower and Custom Hooks, and more importantly invite you to be on the May 21st livestream by submitting your own project to jack on the Discord server or @jherr on Twitter!"
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
const url = "src/content/videos/4cbP95OcfR0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/4cbP95OcfR0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
