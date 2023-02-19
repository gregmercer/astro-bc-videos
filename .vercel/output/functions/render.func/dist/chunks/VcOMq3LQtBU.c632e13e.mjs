import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Mastering async code with Typescript and Javascript",
  "publishedAt": "2021-09-01T13:00:14.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/VcOMq3LQtBU/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/VcOMq3LQtBU/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/VcOMq3LQtBU/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/VcOMq3LQtBU/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/VcOMq3LQtBU/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["async await javascript", "async await typescript", "async code", "async typescript", "error handling patterns in async code", "jack herrington", "javascript async", "javascript async await", "javascript promises", "mastering async javascript", "mastering async typescript", "typescript", "typescript async", "typescript async await", "typescript promises"],
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
    children: "Async code can be some of the hardest code to write in Typescript and Javascript, and we write it all the time. So let\u2019s build up some patterns for writing async/await code well, doing multiple stacked async calls, testing our async code, using promises for caching, and even supporting old school callbacks."
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
const url = "src/content/videos/VcOMq3LQtBU.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/VcOMq3LQtBU.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
