import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Javascript Arrays Made Simple: Indexing and Finding (Part 2)",
  "publishedAt": "2021-11-23T16:00:22.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/XYq9QpgAx8g/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/XYq9QpgAx8g/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/XYq9QpgAx8g/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/XYq9QpgAx8g/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/XYq9QpgAx8g/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["javascript array", "jack herrington", "blue collar coder", "javascript arrays", "javascript array methods", "Javascript Arrays Made Simple", "javascript array iterators made simple", "javascript find method", "javascript findindex", "javascript includes", "javascript some", "javascript some method", "javascript every", "javascript every method", "javascript array tutorial", "javascript array method tutorial", "javascript array basics", "advanced javascript array"],
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
    children: "Lets dig into array methods like find, findIndex, includes, some, every and more to see how JavaScript helps us find out what is in our arrays."
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
const url = "src/content/videos/XYq9QpgAx8g.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/XYq9QpgAx8g.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
