import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "State Management for Module Federation Four Ways",
  "publishedAt": "2021-12-29T16:21:37.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/njXeMeAu4Sg/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/njXeMeAu4Sg/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/njXeMeAu4Sg/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/njXeMeAu4Sg/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/njXeMeAu4Sg/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js state management", "micro frontend state management", "module federation", "module federation webpack 5 react", "micro-frontends", "micro frontend", "micro frontend state", "webpack 5 module federation", "state management module federation", "state management for module federation", "zustand state management module federation", "prop drilling in module federation", "redux in module federation", "Context in module federation", "jack herrington module federation", "module federation state management"],
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
    children: "Let\u2019s talk about four different state managers and state management approaches you can use in your Module Federation architecture. Including Zustand, Redux, Context and prop drilling."
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
const url = "src/content/videos/njXeMeAu4Sg.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/njXeMeAu4Sg.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
