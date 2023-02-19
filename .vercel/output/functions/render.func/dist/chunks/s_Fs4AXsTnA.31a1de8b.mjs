import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Micro-Frontends in Just 10 Minutes",
  "publishedAt": "2021-10-14T13:58:58.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/s_Fs4AXsTnA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/s_Fs4AXsTnA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/s_Fs4AXsTnA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/s_Fs4AXsTnA/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/s_Fs4AXsTnA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["Practical Module Federation", "federated modules", "federated modules in webpack 5", "mfe", "micro frontend architecture", "micro frontends", "micro frontends react", "microfrontends with react", "module federation", "module federation crash course", "module federation tutorial", "module federation webpack 5", "module federation webpack 5 react", "react micro frontend", "solid js module federation", "webpack 5 federated modules", "webpack 5 module federation", "webpack module federation", "micro frontend"],
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
    children: "Take ten minutes to create three applications using Module Federation to create and share a Micro-Frontend between SolidJS and React."
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
const url = "src/content/videos/s_Fs4AXsTnA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/s_Fs4AXsTnA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
