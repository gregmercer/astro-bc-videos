import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Typescript for React Components From Beginners to Masters",
  "publishedAt": "2021-01-27T13:30:04.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/z8lDwLKthr8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/z8lDwLKthr8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/z8lDwLKthr8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/z8lDwLKthr8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/z8lDwLKthr8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js project", "reactjs", "typescript", "react typescript", "react with typescript", "react hooks", "typescript components", "typescript react component", "beginner typescript projects", "react typescript component", "typescript cheatsheet", "typescript hooks", "typescript for react", "typescript for react components", "typescript and react", "typescript with react", "react and typescript", "typescript react", "react typescript components", "typescript react components", "mastering react with typescript"],
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
    children: "Typescript is quickly becoming the industry standard for React development. Take your Typescript skills from beginner to masters level by learning everything you need to know about how to write components in React the right way."
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
const url = "src/content/videos/z8lDwLKthr8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/z8lDwLKthr8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
