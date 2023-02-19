import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #27 -Typescript/React - Redux Toolkit",
  "publishedAt": "2021-06-03T12:57:43.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/eFh2Kr9hfyo/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/eFh2Kr9hfyo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/eFh2Kr9hfyo/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/eFh2Kr9hfyo/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/eFh2Kr9hfyo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["redux toolkit", "redux toolkit tutorial", "redux toolkit typescript", "redux toolkit typescript tutorial", "no bs ts", "No BS TS 27 Redux Toolkit", "typescript react redux and redux toolkit", "redux toolkit for typescript", "typescript redux toolkit", "redux for typescript react", "redux toolkit for typescript react", "typescript react redux", "typescript for react redux and redux toolkit", "react typescript", "typescript react redux tutorial", "typescript for react", "redux and redux toolkit"],
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
    children: "We get into the OG React state manager, Redux, and look how to use it with Redux Toolkit and keep it typed with Typescript."
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
const url = "src/content/videos/eFh2Kr9hfyo.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/eFh2Kr9hfyo.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
