import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Find A GPU You Like With a KD-Tree and React",
  "publishedAt": "2021-09-17T18:44:47.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/Mi6sosJuDDY/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/Mi6sosJuDDY/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/Mi6sosJuDDY/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/Mi6sosJuDDY/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/Mi6sosJuDDY/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Binary Tree", "GPU Finder App", "GPU finder", "KD Tree", "KD tree algorithm", "KD-Tree and React", "KD-Tree and React TypeScript", "algorithm", "algorithms", "balanced bst", "binary search tree", "bst", "computer science", "data structure", "jack herrington", "k-d", "k-d tree", "react typescript material ui"],
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
    children: "Having trouble finding the GPU you want in stock? Maybe another one is just as good. Let\u2019s write an app that helps you find which GPUs are a similar match to that GPU you crave."
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
const url = "src/content/videos/Mi6sosJuDDY.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/Mi6sosJuDDY.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
