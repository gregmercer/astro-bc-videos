import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Nest, Axios, React, React-Native Architecture Speedrun",
  "publishedAt": "2021-06-23T13:50:32.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/_WpzQTHBRLE/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/_WpzQTHBRLE/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/_WpzQTHBRLE/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/_WpzQTHBRLE/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/_WpzQTHBRLE/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["nestjs", "nestjs tutorial", "axios js tutorial", "axios js", "react js", "react-native tutorial", "architecture speedrun", "Nest", "Axios", "React", "React-Native Architecture Speedrun", "Building Shared Types library", "Building the Data Access Library", "React with Nest backend", "React Native with NestJS backend", "blue collar coder"],
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
    children: "We see how fast we can put together React and React-Native applications that talk through a shared custom hook with Axios to talk to a NestJS backend."
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
const url = "src/content/videos/_WpzQTHBRLE.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/_WpzQTHBRLE.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
