import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #5 - Optionals in Typescript",
  "publishedAt": "2021-04-26T13:24:45.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/QvcyL_ZGhf0/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/QvcyL_ZGhf0/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/QvcyL_ZGhf0/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/QvcyL_ZGhf0/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/QvcyL_ZGhf0/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript", "typescript optionals", "no bs ts", "no bs ts 5", "optionals in typescript", "optional fields in typescript", "typescript optional fields", "optional chaining in typescript", "optional function calls in typescript", "optional parameters in typescript", "typescript optional parameters", "typescript optional function calls", "ts optionals", "no bs ts optionals", "typescript null coalescing operator", "typescript ! operator", "! operator typescript"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    code: "code"
  }, props.components);
  return createVNode(_components.p, {
    children: ["Understanding optional parameters, fields and calls is critical to writing great Typescript. Let\u2019s dig in and have a look at all these flavors of optionals, plus optional chaining, the null coalescing operator, and the ", createVNode(_components.code, {
      children: "!"
    }), " operator."]
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
const url = "src/content/videos/QvcyL_ZGhf0.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/QvcyL_ZGhf0.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
