import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "ReactJS or NextJS",
  "publishedAt": "2023-01-19T19:30:47.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/cpG5W4uyqz0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/cpG5W4uyqz0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/cpG5W4uyqz0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/cpG5W4uyqz0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/cpG5W4uyqz0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["next 13", "nextjs 13", "next.js 13", "next js 13", "nextjs react 18", "mui nextjs", "vite nextjs", "next", "nextjs", "next js", "next.js", "nextjs react", "nextjs typescript", "nextjs api", "next js typescript", "nextjs npm", "react 18", "react router v6", "vite", "react", "reactjs", "react.js", "react app", "v6 engine", "react use", "javascript", "typescript", "react typescript", "react hook", "react state", "usenavigate", "mui react"],
  "privacyStatus": "public",
  "short": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return createVNode(_components.p, {
    children: "Should you learn ReactJS or NextJS? What is the difference between NextJS and ReactJS? How do they relate to each other? What value does NextJS add? Learn about all of this, in a minute."
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
const url = "src/content/videos/cpG5W4uyqz0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/cpG5W4uyqz0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
