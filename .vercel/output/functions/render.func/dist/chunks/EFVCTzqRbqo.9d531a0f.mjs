import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Introduction to React #8 | Component Libraries",
  "publishedAt": "2020-09-07T13:54:50.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/EFVCTzqRbqo/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/EFVCTzqRbqo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/EFVCTzqRbqo/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/EFVCTzqRbqo/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/EFVCTzqRbqo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js", "react js tutorial", "learn react js", "react js project", "reactjs", "javascript", "react tutorial", "react js full course", "reactjs tutorial", "react.js", "react crash course", "learn react", "learn reactjs", "react.js tutorial", "component libraries for react", "reactjs component libraries", "react js material ui component library", "component library reactjs material ui", "component library for reactjs material ui"],
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
    children: "We start to get the most out of React by using the Material UI component library to give our application a much cleaner look."
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
const url = "src/content/videos/EFVCTzqRbqo.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/EFVCTzqRbqo.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
