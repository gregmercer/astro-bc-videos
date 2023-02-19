import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Reduce: Mother of all Javascript Array Methods? (Part 5)",
  "publishedAt": "2021-11-29T16:09:29.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/DjzlGfhUyAM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/DjzlGfhUyAM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/DjzlGfhUyAM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/DjzlGfhUyAM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/DjzlGfhUyAM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["javascript array", "jack herrington", "blue collar coder", "javascript array methods", "Javascript Arrays Made Simple", "javascript array tutorial", "javascript array method tutorial", "javascript array basics", "advanced javascript array", "javascript array reduce method", "javascript reduce method", "reduce array method", "reduceRight javascript", "reduceRight array method", "javascript arrays keys values entries", "reduce : mother of all array methods", "Reducing to an object", "Reduce for sequential async"],
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
    children: "Reduce is considered the hardest of the Array functions, is it? Let\u2019s try demystifying this super powerful Array method and give you the power to create anything you want from an arry."
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
const url = "src/content/videos/DjzlGfhUyAM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/DjzlGfhUyAM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
