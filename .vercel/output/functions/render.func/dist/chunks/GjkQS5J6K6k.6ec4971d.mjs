import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "True dynamic loaded components in React",
  "publishedAt": "2020-03-06T15:57:26.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/GjkQS5J6K6k/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/GjkQS5J6K6k/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/GjkQS5J6K6k/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/GjkQS5J6K6k/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["react", "javascript", "ecmascript modules", "rollup", "react js", "dynamically loaded react with esm", "True dynamic loaded components in React", "dynamic loaded components in reactjs", "true dynamic loaded components in reactjs", "dynamic loaded components reactjs", "true dynamic loaded components with react", "true dynamic loaded components with react js", "react js dynamic loaded components"],
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
    children: "Learn how to use Ecmascript modules, Rollup and externalized globals to make a truly independently deployable component framework."
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
const url = "src/content/videos/GjkQS5J6K6k.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/GjkQS5J6K6k.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
