import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "No BS TS #33 - Viewer's Q&A (Does Typescript Bloat Code?)",
  "publishedAt": "2021-06-11T13:08:30.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/_cbJ2iN25_I/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/_cbJ2iN25_I/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/_cbJ2iN25_I/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/_cbJ2iN25_I/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/_cbJ2iN25_I/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS #33 Q&A", "no bs ts", "No BS TS Viewer's Q&A", "No BS TS series finale", "no bs ts tech series", "typescript types vs interfaces", "types vs interfaces", "viewers Q&A", "No BS TS Questions and Answers", "Blue Collar Coder Q&A", "Typescript Getters/Setters", "typescript numeric literals", "Does Typescript Bloat Code?", "don't use default exports in typescript", "Tuples vs Objects in Typescript Hooks", "Sharing Types between server and client", "should we be inferring more in Typescript?"],
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
    children: "Like any good tech series, this \u201Cseason\u201D ends with a Q&A where I answer a bunch of your questions that I have not yet answered."
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
const url = "src/content/videos/_cbJ2iN25_I.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/_cbJ2iN25_I.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
