import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Common React Mistakes: useEffect - Part 1",
  "publishedAt": "2021-03-31T13:12:31.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/lStfMBiWROQ/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/lStfMBiWROQ/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/lStfMBiWROQ/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/lStfMBiWROQ/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/lStfMBiWROQ/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js", "react js tutorial", "react mistakes useEffect", "common react mistakes", "common mistakes in react", "common mistakes in reactjs", "react useeffect mistakes", "mistakes to avoid reactjs", "mistakes to avoid react hooks", "react hook useeffect mistakes", "reactjs mistakes to avoid", "avoid mistakes for react hooks", "common mistakes to avoid for react hooks", "react useeffect mistakes to avoid", "avoid reactjs mistakes", "mistakes in react hooks", "mistakes in react", "common react js mistakes"],
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
    children: "Let\u2019s work through some common mistakes when using React\u2019s useEffect, useCallback and useMemo hooks (or not using them), and also their tricky dependency arrays. We will even come up with a helpful list of rules to live by."
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
const url = "src/content/videos/lStfMBiWROQ.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/lStfMBiWROQ.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
