import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export default function CodeBlock({ children, className }) {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({ childClassName, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={childClassName}
          style={{ ...style, padding: '20px', overflow: 'auto' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
