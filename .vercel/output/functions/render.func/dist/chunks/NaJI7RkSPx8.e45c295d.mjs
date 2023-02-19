import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Javascript Arrays Made Simple: Iterators (Part 1)",
  "publishedAt": "2021-11-22T16:09:20.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/NaJI7RkSPx8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/NaJI7RkSPx8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/NaJI7RkSPx8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/NaJI7RkSPx8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/NaJI7RkSPx8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["javascript array", "javascript array foreach", "javascript for loop", "javascript for of", "javascript for in", "javascript loops", "javascript looping", "javascript looping through arrays", "jack herrington", "blue collar coder", "javascript loops explained", "javascript loops tutorial", "javascript arrays", "javascript loops for beginners", "javascript array methods", "Javascript Arrays Made Simple", "javascript array iterators made simple"],
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
    children: "Let\u2019s have a look at all the different ways to iterate through arrays; for, for(in), for(of) and forEach and figure out which ones you should use, and which you should NOT use."
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
const url = "src/content/videos/NaJI7RkSPx8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/NaJI7RkSPx8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
