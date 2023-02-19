import { _ as __astro_tag_component__, F as Fragment, k as createVNode } from './astro.33314ce0.mjs';

const frontmatter = {
  "title": "Command & Memento Patterns in Typescript (No BS TS Series 2 Episode 4)",
  "publishedAt": "2021-10-21T15:22:26.000Z",
  "thumbnails": {
    "default": {
      "url": "https://i.ytimg.com/vi/H2kxc_ZrSPI/default.jpg",
      "width": 120,
      "height": 90
    },
    "medium": {
      "url": "https://i.ytimg.com/vi/H2kxc_ZrSPI/mqdefault.jpg",
      "width": 320,
      "height": 180
    },
    "high": {
      "url": "https://i.ytimg.com/vi/H2kxc_ZrSPI/hqdefault.jpg",
      "width": 480,
      "height": 360
    },
    "standard": {
      "url": "https://i.ytimg.com/vi/H2kxc_ZrSPI/sddefault.jpg",
      "width": 640,
      "height": 480
    },
    "maxres": {
      "url": "https://i.ytimg.com/vi/H2kxc_ZrSPI/maxresdefault.jpg",
      "width": 1280,
      "height": 720
    }
  },
  "tags": ["No BS TS", "No BS TS Series 2", "typescript design pattern", "javascript design patterns", "software design patterns", "jack herrington", "jack herrington typescript", "Typescript Design Patterns", "gof design patterns", "best practice", "design patterns", "command pattern", "memento pattern", "command design patterns", "memento design patterns", "command and momento design patterns", "command pattern typescript", "memento pattern typescript", "Command & Memento Architecture"],
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
    children: "Let\u2019s have a look at the Command and Memento Design Patterns in TypeScript and see how to implement Undo, and time-travel state management the easy way. We even build out a custom hook that adds undo functionality to useState!"
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
const url = "src/content/videos/H2kxc_ZrSPI.mdx";
const file = "/Users/gmercer/Desktop/astro/astro-bc-videos/src/content/videos/H2kxc_ZrSPI.mdx";
function rawContent() { throw new Error("MDX does not support rawContent()! If you need to read the Markdown contents to calculate values (ex. reading time), we suggest injecting frontmatter via remark plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }function compiledContent() { throw new Error("MDX does not support compiledContent()! If you need to read the HTML contents to calculate values (ex. reading time), we suggest injecting frontmatter via rehype plugins. Learn more on our docs: https://docs.astro.build/en/guides/integrations-guide/mdx/#inject-frontmatter-via-remark-or-rehype-plugins") }const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
