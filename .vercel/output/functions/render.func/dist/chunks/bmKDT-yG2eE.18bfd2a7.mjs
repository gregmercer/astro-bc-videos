import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Amazing New VS Code Extension: Console Ninja",
  "publishedAt": "2022-10-31T14:27:57.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/bmKDT-yG2eE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/bmKDT-yG2eE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/bmKDT-yG2eE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/bmKDT-yG2eE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/bmKDT-yG2eE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["visual studio code", "vscode", "vscode extensions", "console ninja", "Console Ninja", "vs code extension", "vs code extension console ninja", "console ninja vs code extension", "console ninja for debugging", "javascript debugging", "typescript debugging", "new vs code extension", "new vs code extensions"],
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
    children: ["Check out this new Console Ninja extension that will show your ", createVNode(_components.code, {
      children: "console.log"
    }), " messages\nright in VS Code."]
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
const url = "src/content/videos/bmKDT-yG2eE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/bmKDT-yG2eE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
