import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #20 - Typescript/React - Setup and Properties",
  "publishedAt": "2021-05-24T12:37:59.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/gChqkchbn9o/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/gChqkchbn9o/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/gChqkchbn9o/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/gChqkchbn9o/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/gChqkchbn9o/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Typescript", "typescript react", "Typescript/React - Setup and Properties", "No BS TS 20 Typescript/React", "Typescript/React", "typescript for react", "typescript create react app", "typescript with react", "typescript with react setup", "React in Typescript", "react with typescript", "React Typescript setup", "typescript react setup", "Typescript for React", "typescript for reactjs", "typescript for react js", "typescript react setup and properties", "react typescript setup and properties", "no bs ts"],
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
    children: "Let\u2019s check out how Typescript works in React by setting up a Create React App (CRA) project with a Typescript template and then investigate how to do properties in Typescript."
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
const url = "src/content/videos/gChqkchbn9o.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/gChqkchbn9o.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
