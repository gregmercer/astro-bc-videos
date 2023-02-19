import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #11 - Enums and Literal Types in Typescript",
  "publishedAt": "2021-05-06T12:56:45.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/VrfJeXj7TiQ/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/VrfJeXj7TiQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/VrfJeXj7TiQ/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/VrfJeXj7TiQ/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/VrfJeXj7TiQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript", "typescript tutorial", "no bs ts", "no bs ts 11", "no BS TS", "Enums and Literal Types in Typescript", "No BS TS #11", "enums in typescript", "literal types in typescript", "typescript enums and literal types", "typescript enumerations", "typescript literal types", "typescript string literals", "typescript numeric literals", "enumerations in typescript", "no bs ts enums and literal types", "enums and literal types for typescript", "enumerations and literal types in typescript", "typescript enums"],
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
    children: "Lets export enumerations and literal types in Typescript and show how they can make your code safer."
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
const url = "src/content/videos/VrfJeXj7TiQ.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/VrfJeXj7TiQ.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
