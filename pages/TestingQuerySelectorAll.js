import React, { createRef } from 'react';
import { simpleQuerySelectorAll } from '../utils';

const TestingQuerySelectorAll = () => {
  const referenceToRoot = createRef();

  const findElement = () => {
    const rootNode = referenceToRoot.current;
    const tagNameToFind = 'span';

    const results = simpleQuerySelectorAll(rootNode, tagNameToFind);
    alert('check console for results!');
    console.log({ simpleQuerySelectorAll: results });
  };

  return (
    <>
      <button type="button" onClick={findElement}>
        Find all Elements!!
      </button>
      Given a DOM of following structure:{' '}
      <pre>
        {`      
          <div id="root" ref={referenceToRoot}>
            <div>
              <span />
            </div>
            <div>
              <span>
                <span />
              </span>
              <div>
                <div />
              </div>
            </div>
          </div>
        `}
      </pre>
      Find all elements matching the passed in selector: <strong>Span</strong>
      <div id="root" ref={referenceToRoot}>
        <div>
          <span />
        </div>
        <div>
          <span>
            <span />
          </span>
          <div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestingQuerySelectorAll;
