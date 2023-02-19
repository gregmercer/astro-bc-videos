import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Five Essential Design Patterns in Typescript",
  "publishedAt": "2021-03-13T08:50:49.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/JBu2ZTPgiKI/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/JBu2ZTPgiKI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/JBu2ZTPgiKI/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/JBu2ZTPgiKI/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/JBu2ZTPgiKI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["typescript design patterns", "essential typescript design patterns", "typescript", "ts design patterns", "design patterns in typescript", "software design patterns", "Design patterns in typescript", "typescript and design patterns", "typescript and essential design patterns", "typescript design system", "essential design patterns for typescript", "typescript design architecture", "typescript essential design patterns", "essential design patterns with typescript", "typescript design pattern tutorial"],
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
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "I\u2019m going to \u201Cdo it live!\u201D as I bring you five essential Design Patterns, from the GoF book, in Typescript, live, as you get to ask questions along the way! Super exciting, I can\u2019t wait to see how it turns out!"
    }), "\n", createVNode(_components.p, {
      children: "One thing I can guarantee is that you will come away from this with a decent idea of what these patterns are and code that you can reuse in your applications."
    })]
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
const url = "src/content/videos/JBu2ZTPgiKI.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/JBu2ZTPgiKI.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
