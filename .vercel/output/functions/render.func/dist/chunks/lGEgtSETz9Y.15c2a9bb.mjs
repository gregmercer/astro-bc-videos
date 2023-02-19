import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #21 - Typescript/React - Hooks",
  "publishedAt": "2021-05-25T13:26:11.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/lGEgtSETz9Y/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/lGEgtSETz9Y/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/lGEgtSETz9Y/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/lGEgtSETz9Y/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/lGEgtSETz9Y/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Typescript", "typescript react", "No BS TS 21 Typescript/React Hooks", "Typescript for React Hooks", "React Hooks with typescript", "typescript for react hooks", "No BS TS", "typescript usestate", "typescript useeffect hook", "typescript react hooks", "typescript/react hooks", "React Typescript Hooks", "React hooks for typescript", "typescript with react hooks", "Typescript For React Hooks", "Typescript/React - Hooks", "React/Typescript - Hooks", "no bs ts"],
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
    children: "Let\u2019s see how to type useState, useReducer, useEffect and useCallback."
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
const url = "src/content/videos/lGEgtSETz9Y.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/lGEgtSETz9Y.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
