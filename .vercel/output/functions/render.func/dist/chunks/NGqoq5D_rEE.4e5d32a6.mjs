import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "5 React Alternatives You Should Know",
  "publishedAt": "2022-05-31T14:56:02.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/NGqoq5D_rEE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/NGqoq5D_rEE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/NGqoq5D_rEE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/NGqoq5D_rEE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/NGqoq5D_rEE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react", "react alternative", "Top Five React Alternatives", "blue collar coder", "jack herrington", "alternative react frameworks", "svelte", "solidjs", "flutter", "react alternatives", "top five react alternatives", "vue", "five react alternatives", "react framework alternatives", "reactjs alternatives", "top five react js alternatives", "react library alternatives", "five top react alternatives", "five top react js alternatives", "5 React Alternatives"],
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
    children: "If not React, then what should we use instead? Flutter? Angular? Solid-JS? Vue? Svelte? VanillaJS? Web Components? Let\u2019s talk pros, cons and career impact."
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
const url = "src/content/videos/NGqoq5D_rEE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/NGqoq5D_rEE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
