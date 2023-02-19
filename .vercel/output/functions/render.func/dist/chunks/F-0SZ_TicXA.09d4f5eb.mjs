import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Common React Mistakes: useEffect - Part 2",
  "publishedAt": "2021-04-07T13:34:32.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/F-0SZ_TicXA/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/F-0SZ_TicXA/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/F-0SZ_TicXA/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/F-0SZ_TicXA/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/F-0SZ_TicXA/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js", "react js tutorial", "react mistakes useEffect", "common react mistakes", "common mistakes in react", "common mistakes in reactjs", "react useeffect mistakes", "mistakes to avoid reactjs", "mistakes to avoid react hooks", "react hook useeffect mistakes", "reactjs mistakes to avoid", "avoid mistakes for react hooks", "react useeffect mistakes to avoid", "avoid reactjs mistakes", "avoid react hooks mistakes", "mistakes in react hooks", "mistakes in react", "mistakes in useeffect hook"],
  "privacyStatus": "public",
  "short": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a"
  }, props.components);
  return createVNode(_components.p, {
    children: ["Let\u2019s build on part 1 (", createVNode(_components.a, {
      href: "https://youtu.be/lStfMBiWROQ",
      children: "https://youtu.be/lStfMBiWROQ"
    }), ") by looking at the cleanup function on useEffect to make sure that we are using timeouts, intervals and registering event listeners properly."]
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
const url = "src/content/videos/F-0SZ_TicXA.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/F-0SZ_TicXA.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
