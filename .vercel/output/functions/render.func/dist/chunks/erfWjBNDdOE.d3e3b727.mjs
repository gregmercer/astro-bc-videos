import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Dump The Keyboard? Draw Your Logic with XState!",
  "publishedAt": "2022-05-02T14:25:20.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/erfWjBNDdOE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/erfWjBNDdOE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/erfWjBNDdOE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/erfWjBNDdOE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/erfWjBNDdOE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Xstate", "Xstate IDE", "Xstate react", "xstate react hooks", "xstate react hooks implementation", "xstate state machine", "stately xstate", "xstate stately", "xstate events", "xstate actions", "blue collar coder", "xstate vscode integration", "xstate vs code", "xstate services", "xsate event", "xstate tutorial", "jack herrington xstate", "stately", "xstate IDE vscode integration", "xstate action", "xstate event"],
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
    children: "Trying out the new XState IDE to build reliable asynchronous business logic by drawing it."
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
const url = "src/content/videos/erfWjBNDdOE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/erfWjBNDdOE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
