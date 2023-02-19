import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Introduction to React #11 | useReducer",
  "publishedAt": "2020-11-11T14:36:36.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/aM1bxz-82Qw/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/aM1bxz-82Qw/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/aM1bxz-82Qw/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/aM1bxz-82Qw/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/aM1bxz-82Qw/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js", "react js tutorial", "learn react js", "react js project", "reactjs", "javascript", "react tutorial", "react js full course", "react js website", "react tutorial for beginners", "react js crash course", "reactjs tutorial", "react.js", "react js project from scratch", "react crash course", "reactjs tutorial for beginners", "learn react", "learn reactjs", "reactjs course", "react.js tutorial", "react js tutorial for beginners", "reactjs for beginners", "reactjs crash course", "react course"],
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
    children: "We learn how to use the useReducer hook instead of the useState hook to store data."
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
const url = "src/content/videos/aM1bxz-82Qw.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/aM1bxz-82Qw.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
