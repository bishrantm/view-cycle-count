import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "sonner";
import { FONT } from "../imports/shared-ui";

function LoadingFallback() {
  return (
    <div
      className="flex items-center justify-center h-screen w-full"
      style={{
        background: "var(--background)",
        color: "var(--text-secondary)",
        fontFamily: FONT,
        fontSize: "var(--text-body-sm)",
      }}
    >
      <div className="flex flex-col items-center" style={{ gap: "var(--spacing-3)" }}>
        <div
          className="animate-spin rounded-full"
          style={{
            width: "32px",
            height: "32px",
            border: "3px solid var(--border)",
            borderTopColor: "var(--primary)",
          }}
        />
        <span>Loading…</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          unstyled: true,
          style: {
            fontFamily: FONT,
          },
        }}
      />
    </Suspense>
  );
}