import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Hacking Redux Devtools for Vanilla JS, React Hooks and Zustand!",
  "publishedAt": "2022-04-25T14:47:41.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/nImE4P8Wc_M/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/nImE4P8Wc_M/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/nImE4P8Wc_M/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/nImE4P8Wc_M/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/nImE4P8Wc_M/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["redux dev tools", "Time Warp State for Vanilla JS", "Time Warp State for React Hooks", "Time Warp State for Zustand", "Redux Devtools", "redux dev tools vanilla js integration", "redux dev tools react integration", "redux dev tools zustand integration", "warp state debugging", "blue collar coder", "jack herrington redux dev tools", "Redux Dev Tools API", "zustand state", "vanilla js state", "react hooks state", "hacking redux devtools", "redux devtools", "redux devtools tutorial"],
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
    children: "Let\u2019s hack Redux Devtools to show, and control, state from Vanilla JS,  React Hooks and Zustand!"
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
const url = "src/content/videos/nImE4P8Wc_M.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/nImE4P8Wc_M.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
