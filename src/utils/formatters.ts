import { headingSizeStyles } from "@/components/typography/utils";

export function extractYear(dateString: string): number {
  const date = new Date(dateString);
  return date.getFullYear();
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short", // short month format (e.g., "Sep")
    day: "numeric", // numeric day (e.g., "5")
  });
}

export function renderRichText(content: RichTextNode[]): string {
  return content
    .map((node) => {
      switch (node.nodeType) {
        case "paragraph":
          return `<p class="text-black">${renderRichText(
            node.content || []
          )}</p>`;
        case "heading-1":
          return `<h1 class="${headingSizeStyles["heading1"]}">${renderRichText(
            node.content || []
          )}</h1>`;
        case "heading-2":
          return `<h2 class="${headingSizeStyles["heading2"]}">${renderRichText(
            node.content || []
          )}</h2>`;
        case "heading-3":
          return `<h3 class="${headingSizeStyles["heading3"]}">${renderRichText(
            node.content || []
          )}</h3>`;
        case "heading-4":
          return `<h4 class="${headingSizeStyles["heading4"]}">${renderRichText(
            node.content || []
          )}</h4>`;
        case "heading-5":
          return `<h5 class="${headingSizeStyles["heading5"]}">${renderRichText(
            node.content || []
          )}</h5>`;
        case "heading-6":
          return `<h6 class="${headingSizeStyles["heading6"]}">${renderRichText(
            node.content || []
          )}</h6>`;
        case "text":
          let textValue = node.value || "";
          // You can handle text formatting like bold or italic here using `node.marks`
          // For example, applying bold formatting:
          if (node.marks) {
            node.marks.forEach((mark) => {
              if (mark.type === "bold") {
                textValue = `<strong>${textValue}</strong>`;
              }
              // Add more marks handling as needed
            });
          }
          return textValue;
        case "unordered-list":
          return `<ul>${renderRichText(node.content || [])}</ul>`;
        case "ordered-list":
          return `<ol>${renderRichText(node.content || [])}</ol>`;
        case "list-item":
          return `<li>${renderRichText(node.content || [])}</li>`;
        default:
          console.warn(`Unsupported node type: ${node.nodeType}`);
          return "";
      }
    })
    .join("");
}
