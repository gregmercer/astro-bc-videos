import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Fixing TypeScript's Blindspot: Runtime Typechecking",
  "publishedAt": "2021-09-08T13:00:13.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/rY_XqfSHock/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/rY_XqfSHock/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/rY_XqfSHock/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/rY_XqfSHock/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/rY_XqfSHock/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Fixing TypeScript's Blindspot", "Runtime Typechecking", "jack herrington", "runtime typechecking in typescript", "runtime typechecking typescript", "typescript runtime type checking", "typescript runtime type checking library", "typescript type checking"],
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
    children: "TypeScript only checks types at compile time. And that means that, invalid data, that doesn\u2019t have the fields we think are required, can still break our applications. Learn how to use Zod, Yup, and Joi to fix this problem and go even further to check the contents of the fields at runtime."
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
const url = "src/content/videos/rY_XqfSHock.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/rY_XqfSHock.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
