import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Mastering React's useEffect",
  "publishedAt": "2022-01-24T15:14:18.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/dH6i3GurZW8/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/dH6i3GurZW8/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/dH6i3GurZW8/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/dH6i3GurZW8/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/dH6i3GurZW8/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["blue collar coder", "jack herrington useEffect", "React useEffect", "useEffect Reactjs", "useeffect dependency array", "Function Dependencies in useEffect", "Dependency Array in useEffect", "useEffect cleanup functions", "Cleanup functions useEffect", "React.useEffect", "useEffect hook", "jack herrington", "useEffect", "cleanup function useeffect", "reactjs cleanup functions", "react useEffect", "mastering useEffect hook", "mastering react useEffect", "mastering useEffect", "React js", "react useeffect"],
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
    children: "It\u2019s easier to write code that makes React\u2019s useEffect hook go off the rails than it is to write code that uses it the right way. Let\u2019s develop some strategies that you can use to make sure the useEffects you write always work when and how you expect them to work."
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
const url = "src/content/videos/dH6i3GurZW8.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/dH6i3GurZW8.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
