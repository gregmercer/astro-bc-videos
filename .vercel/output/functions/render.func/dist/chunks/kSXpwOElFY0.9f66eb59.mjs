import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "I Dumped iTerm for Warp, Should You?",
  "publishedAt": "2022-04-18T14:38:48.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/kSXpwOElFY0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/kSXpwOElFY0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/kSXpwOElFY0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/kSXpwOElFY0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/kSXpwOElFY0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Warp", "iTerm", "warp terminal", "AI driven terminal", "Warp AI-Driven Command Hints", "Warp Option Hinting", "Warp vs Fig", "Warp Themeing", "Warp Blocks", "blue collar coder", "jack herrington Warp", "Warp Terminal", "AI Driven Terminal", "Terminal Basics", "Warp Terminal Basics", "warp vs iterm2", "warp vs iterm", "Warp v1", "iterm vs mac", "mac terminal customize", "mac terminal custom theme", "customize mac terminal", "iterm for warp", "iterm2 for warp"],
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
    children: "If you are using Terminal or iTerm you should check out Warp, it\u2019s an entirely new take on the terminal."
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
const url = "src/content/videos/kSXpwOElFY0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/kSXpwOElFY0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
