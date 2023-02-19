import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Five Module Federation/Micro-Frontend Mistakes",
  "publishedAt": "2021-11-04T15:00:19.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/0WIFW3s2fDM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/0WIFW3s2fDM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/0WIFW3s2fDM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/0WIFW3s2fDM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/0WIFW3s2fDM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["module federation", "federated modules", "micro-frontend", "micro-fe", "react architecture", "micro frontend", "micro frontend react", "micro frontend architecture", "webpack 5", "federated modules in webpack 5", "micro frontends", "module federation webpack 5", "webpack 5 federated modules", "webpack 5 module federation", "module federation crash course", "Module Federation Mistakes", "Micro Frontend Mistakes", "Five Module Federation/Micro-Frontend Mistakes", "Module Federation/Micro-Frontend Mistakes"],
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
    children: "Module Federation is an advanced front-end topic, that\u2019s for sure, so let\u2019s talk about some mistakes that people make, and misconceptions people have, about the this Webpack 5 functionality, as well as how to avoid them."
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
const url = "src/content/videos/0WIFW3s2fDM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/0WIFW3s2fDM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
