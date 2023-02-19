import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Micro-FEs Crash Course: Live!",
  "publishedAt": "2021-11-14T08:05:28.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/RonRwypIVaw/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/RonRwypIVaw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/RonRwypIVaw/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/RonRwypIVaw/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/RonRwypIVaw/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Micro Frontends", "micro frontends live", "micro frontends crash course", "Micro-FE course", "micro frontend freecodecamp", "micro frontend crash course", "micro frontend crash course freecodecamp", "micro frontends crash course live", "micro frontends crash course jack herrington", "Micro- FE course freecodecamp", "micro frontends tutorial", "micro frontends course", "Micro Frontends Crash Course", "micro frontend", "jack herrington micro frontend"],
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
    children: "Don\u2019t know what a Micro-Frontend, but you\u2019ve heard the buzz and you want to learn it. Let me take you from just starting out, to understanding asynchronous loading, error handling, shared state, cross platform micro-frontends, how to route multiple applications together, and even how to test Micro-Frontend code."
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
const url = "src/content/videos/RonRwypIVaw.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/RonRwypIVaw.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
