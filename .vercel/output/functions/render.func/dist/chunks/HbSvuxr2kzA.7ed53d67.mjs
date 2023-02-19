import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Fixing Bad Copilot Code - mergeArrays",
  "publishedAt": "2021-11-15T16:00:08.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/HbSvuxr2kzA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/HbSvuxr2kzA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/HbSvuxr2kzA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/HbSvuxr2kzA/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/HbSvuxr2kzA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["github copilot", "github copilot jack herrington", "github copilot code", "github copilot code cleanup", "copilot code cleanup", "Cleaning Up Copilot Code", "github copilot Human vs AI", "github copilot vscode", "github copilot review", "github copilot tutorial", "github copilot examples", "github vs human", "github vs coder", "fixing bad copilot code", "fixing copilot code", "fixing github copilot code", "fixing copilot code mergeArrays"],
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
    children: "GitHub Copilot code is often amazing and sometimes terrifying. Let\u2019s take a O(N^3) mergeArrays implementation and turn it into a sleek O(N) ES6 near one liner, step by step."
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
const url = "src/content/videos/HbSvuxr2kzA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/HbSvuxr2kzA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
