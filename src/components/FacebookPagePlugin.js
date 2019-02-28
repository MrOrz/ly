import React, { useLayoutEffect, useRef } from 'react';

import FBAsync from 'lib/FBAsync';

const DEFAULT_TABS = ['messages', 'timeline'];

function FacebookPagePlugin({
  className = '',
  tabs = DEFAULT_TABS,
  href = '',
  width = 320,
  height = 500,
}) {
  const fbRoot = useRef(null);

  useLayoutEffect(() => {
    FBAsync.then(FB => FB.XFBML.parse(fbRoot.current));
  }, [tabs, href, width]); // Mobile keyboard will trigger height change, don't re-parse by it

  return (
    <div ref={fbRoot} className={className}>
      <div
        className="fb-page"
        data-href={href}
        data-tabs={tabs.join(',')}
        data-small-header="true"
        data-adapt-container-width="false"
        data-show-facepile="false"
        data-hide-cta="true"
        data-width={width}
        data-height={height}
      />
    </div>
  );
}

export default React.memo(FacebookPagePlugin);