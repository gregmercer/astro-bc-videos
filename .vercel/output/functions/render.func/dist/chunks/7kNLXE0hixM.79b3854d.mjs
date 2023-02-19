import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Code Splitting Made Simple",
  "publishedAt": "2022-01-10T15:44:10.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/7kNLXE0hixM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/7kNLXE0hixM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/7kNLXE0hixM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/7kNLXE0hixM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/7kNLXE0hixM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["code splitting", "jack herrington code splitting", "code splitting react js", "Code Splitting Made Simple", "React Default Exports", "React Named Exports", "React.Lazy and Suspense", "React Loadable Components", "Async Loaded React Components", "Imports Using Async/Await", "Controlling Chunk Names", "webpack 5 code splitting", "module federation code splitting", "blue collar coder", "code splitting in webpack", "code splitting in react", "Wrapping Async Loaded React Components", "react code splitting"],
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
    children: "Let\u2019s take a bite out of these huge React applications by learning how to asynchronously load static data, functions, React component from our own application and even other applications!"
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
const url = "src/content/videos/7kNLXE0hixM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/7kNLXE0hixM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
