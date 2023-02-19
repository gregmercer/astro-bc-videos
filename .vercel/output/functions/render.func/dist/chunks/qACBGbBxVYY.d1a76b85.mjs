import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #23 - Typescript/React - Custom Hooks",
  "publishedAt": "2021-05-27T13:05:38.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/qACBGbBxVYY/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/qACBGbBxVYY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/qACBGbBxVYY/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/qACBGbBxVYY/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/qACBGbBxVYY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Typescript", "typescript react", "Typescript/React", "typescript for react", "typescript create react app", "typescript with react", "typescript with react setup", "React in Typescript", "typescript for react custom hooks", "react custom hook for typescript", "react custom hooks with typescript", "custom hooks for react-typescript", "custom hooks for typescript/react", "typescript react with custom hooks", "typescript-react custom hooks", "react-typescript custom hook", "no bs ts"],
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
    children: "Let\u2019s delve deeper into React to see how to build and type our own custom hooks."
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
const url = "src/content/videos/qACBGbBxVYY.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/qACBGbBxVYY.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
