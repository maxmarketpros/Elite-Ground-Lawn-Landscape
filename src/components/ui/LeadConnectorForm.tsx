"use client";

import Script from "next/script";

interface LeadConnectorFormProps {
  formId?: string;
  formName?: string;
  title?: string;
  height?: number;
  className?: string;
}

export default function LeadConnectorForm({
  formId = "zdRUXnS97cVSCpiLMXsa",
  formName = "WebSite Form Template",
  title = "WebSite Form Template",
  height = 770,
  className = "",
}: LeadConnectorFormProps) {
  const iframeId = `inline-${formId}`;

  return (
    <div
      className={`w-full bg-white rounded-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)] overflow-hidden ${className}`}
    >
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{
          width: "100%",
          height: `${height}px`,
          border: "none",
          borderRadius: "3px",
          display: "block",
        }}
        id={iframeId}
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={title}
      />
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
