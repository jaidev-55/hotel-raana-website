"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#D4202A",
            colorText: "#1B1F4B",
            borderRadius: 12,
            controlHeight: 44,
            fontFamily: "var(--font-poppins)",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
