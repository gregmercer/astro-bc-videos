import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #22 - Typescript/React - Advanced Properties",
  "publishedAt": "2021-05-26T12:52:19.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/9y0eY6hs1QM/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/9y0eY6hs1QM/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/9y0eY6hs1QM/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/9y0eY6hs1QM/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/9y0eY6hs1QM/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript for react advanced properties", "typescript", "react", "typescript for react", "typescript/react advanced properties", "typescript-react advanced properties", "typescript/react", "No BS TS #22 - Typescript/React - Advanced Properties", "Typescript/React - Advanced Properties", "typescript/react - advanced properties", "advanced properties for typescript-react", "advanced properties in react typescript", "advanced properties for react-typescript", "no bs ts"],
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
    children: "We figure out the right way to send state setting actions to nested components. As well as how to wrap html elements with all the appropriate properties using DetailedHTMLProps."
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
const url = "src/content/videos/9y0eY6hs1QM.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/9y0eY6hs1QM.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
