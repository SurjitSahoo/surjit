import { Fragment } from 'react';
import { IThoughtContent } from '@surjit/types';
import { Text, BaseElement } from 'slate';
import escapeHTML from 'escape-html';

interface RichNode extends BaseElement {
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  children?: RichNode[];
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'ul'
    | 'ol'
    | 'li'
    | 'link'
    | 'p'
    | 'quote';
}

const serialize = (children: RichNode[]) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case 'h1':
        return <h1 key={i}>{serialize(node.children)}</h1>;
      // Iterate through all headings here...
      case 'h6':
        return <h6 key={i}>{serialize(node.children)}</h6>;
      case 'quote':
        return <blockquote key={i}>{serialize(node.children)}</blockquote>;
      case 'ul':
        return <ul key={i}>{serialize(node.children)}</ul>;
      case 'ol':
        return <ol key={i}>{serialize(node.children)}</ol>;
      case 'li':
        return <li key={i}>{serialize(node.children)}</li>;
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(node.children)}
          </a>
        );

      default:
        return <p key={i}>{serialize(node.children)}</p>;
    }
  });

interface Props {
  content: IThoughtContent;
}
export function RichTextToHTML({ content }: Props) {
  return <>{serialize(content)}</>;
}

export default RichTextToHTML;
