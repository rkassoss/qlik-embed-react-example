import type { HostConfig } from "@qlik/api/auth";
import qix, { type Doc } from "@qlik/api/qix";
import { useEffect, useState } from "react";

export const useApp = (appId: string, hostConfig?: HostConfig) => {
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  const [app, setApp] = useState<Doc | null>(null);

  useEffect(() => {
    const getApp = async () => {
      const session = qix.openAppSession({ appId, hostConfig });
      const doc = await session.getDoc();
      setApp(doc);
    };
    if (hostConfig) {
      getApp().catch(console.error); // eslint-disable-line no-console
    }
  }, [appId, hostConfig]);

  return app;
};