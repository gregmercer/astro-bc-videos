import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Fixing Redux/Zustand Re-Renders",
  "publishedAt": "2022-06-06T15:05:23.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/aOt4Hz3ze3Q/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/aOt4Hz3ze3Q/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/aOt4Hz3ze3Q/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/aOt4Hz3ze3Q/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/aOt4Hz3ze3Q/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["redux", "zustand", "jack herrington", "blue collar coder", "redux useSelector", "redux store", "zustand store", "zustand selectors", "redux shallow equality", "zustand shallow", "zustand state management", "redux state management", "redux store setup", "Fixing Redux and Zustand Selectors", "Redux and Zustand Selectors", "zustand store setup", "fixing redux selector", "fixing zustand selector", "shallow checking zustand", "shallow checking redux", "react re-render", "redux re render", "zustand re render"],
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
    children: "Let\u2019s see if we can cut down on the re-renders by building better selectors for Redux and Zustand."
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
const url = "src/content/videos/aOt4Hz3ze3Q.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/aOt4Hz3ze3Q.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
