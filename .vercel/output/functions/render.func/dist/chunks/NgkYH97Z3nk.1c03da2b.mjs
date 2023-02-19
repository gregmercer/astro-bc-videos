import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "React UI Library Structure, Storybook and Tests",
  "publishedAt": "2022-06-21T14:43:21.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/NgkYH97Z3nk/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/NgkYH97Z3nk/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/NgkYH97Z3nk/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/NgkYH97Z3nk/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/NgkYH97Z3nk/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["React UI Library Structure", "React UI", "React Storybook", "React Tests", "jest react", "react jest", "react unit testing", "react storybook", "react ui testing", "react ui testing jest", "react ui storybook", "react ui library", "react ui structure", "storybook react", "react ui test", "reactjs testing jest", "reactjs unit tests", "reactjs storybook", "reactjs ui structure", "react unit tests", "react unit test"],
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
    children: "Let\u2019s dig into how to structure a UI library files, storybook stories, and tests."
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
const url = "src/content/videos/NgkYH97Z3nk.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/NgkYH97Z3nk.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
