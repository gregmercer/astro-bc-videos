import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Hacking Your Github Contribution Graph || Javascript Tutorial",
  "publishedAt": "2020-08-26T16:08:43.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/_ZQSPYDlk3U/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/_ZQSPYDlk3U/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/_ZQSPYDlk3U/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/_ZQSPYDlk3U/sddefault.jpg",
      "width": 640,
      "height": 480
    }
  },
  "tags": ["vanilla javascript", "vanilla javascript project", "github projects", "vanilla javascript tutorial", "javascript", "javascript tutorial", "dom manipulation", "fun javascript projects for beginners", "javascript beginner project", "javascript project", "tutorial", "coding", "html", "java script tutorial", "javascript for beginners", "web development", "programming", "pure javascript", "vanilla js", "js tutorial", "explain vanilla javascript", "vanilla javascript tutorials"],
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
    children: "You can make your Github contribution graph look like whatever you want, then take some snaps and put them on Twitter. Or just deploy your re-imagined graph on Github itself using Github Pages! So let\u2019s jump in and see how to hack your contribution graph using Vanilla JS."
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
const url = "src/content/videos/_ZQSPYDlk3U.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/_ZQSPYDlk3U.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
