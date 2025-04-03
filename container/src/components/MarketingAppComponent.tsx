import { lazy } from "react";

const MarketingAppComponent = lazy(() => {
  return import("marketing/MarketingApp").then(() => {
    return {
      default: () => (
        <div
          dangerouslySetInnerHTML={{
            __html: "<my-marketing-app></my-marketing-app>",
          }}
        />
      ),
    };
  });
});

export default MarketingAppComponent;
