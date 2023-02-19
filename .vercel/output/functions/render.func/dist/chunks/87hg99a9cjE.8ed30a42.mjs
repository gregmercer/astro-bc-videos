import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Plugins for React Apps - No Really!",
  "publishedAt": "2021-02-06T15:37:19.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/87hg99a9cjE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/87hg99a9cjE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/87hg99a9cjE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/87hg99a9cjE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/87hg99a9cjE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["react js", "react js tutorial", "learn react js", "react js project", "reactjs", "react tutorial", "react.js", "learn react", "learn reactjs", "react course", "react plugins", "ScandiPWA", "progressive web apps", "react progressive web app tutorial", "reactPWA", "reactjs PWA", "progressive web app", "scandipwa react", "react scandipwa", "react scandipwa web app", "react with scandipwa", "react scandipwa tutorial", "ScandiPWA react demo", "react plugin scandipwa", "scandiPWA react plugin", "scandiPWA plugin for react"],
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
    children: "Can we have the same kind of pluggable modular architecture in Node/React in a similar way as the Java folks have it in their configurable servers? Yes we can using some cool Webpack plugins and Create React App (or honestly anything you want to put it on.) Check it out and let me know what you think!"
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
const url = "src/content/videos/87hg99a9cjE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/87hg99a9cjE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
