import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Fixing Bad Copilot Code - maxChar",
  "publishedAt": "2021-11-08T16:00:33.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/yo87SLp4jOo/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/yo87SLp4jOo/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/yo87SLp4jOo/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/yo87SLp4jOo/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/yo87SLp4jOo/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["github copilot", "github copilot jack herrington", "github copilot code", "github copilot code cleanup", "copilot code cleanup", "Cleaning Up Copilot Code", "github copilot Human vs AI", "github copilot vscode", "github copilot review", "github copilot tutorial", "github copilot examples", "github vs human", "github vs coder", "fixing bad copilot code", "fixing copilot code", "fixing copilot code maxChar"],
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
    children: "GitHub Copilot is a great helper, but you it\u2019s just the copilot. Let\u2019s take the pilot\u2019s chair and turn some not so great Copilot code and turn it into high quality production ready TypeScript code."
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
const url = "src/content/videos/yo87SLp4jOo.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/yo87SLp4jOo.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
