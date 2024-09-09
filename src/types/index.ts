interface RichTextNode {
  nodeType: string;
  content?: RichTextNode[];
  data?: any;
  value?: string;
  marks?: any[];
}

// interface Page {
//   contentTypeId: "page";
//   metadata: { tags: any[] };
//   sys: {
//     space: any;
//     id: string;
//     type: string;
//     createdAt: string;
//     updatedAt: string;
//     environment: any;
//     revision: number;
//     contentType: any;
//     locale: string;
//   };
//   fields: {
//     title: string;
//     slug: string;
//     pageContent: string;
//   };
// }

// interface MediaFile {
//   metadata: { tags: any[] };
//   sys: {
//     space: {
//       sys: {
//         type: string;
//         linkType: string;
//         id: string;
//       };
//     };
//     id: string;
//     type: string;
//     createdAt: string;
//     updatedAt: string;
//     environment: {
//       sys: {
//         id: string;
//         type: string;
//         linkType: string;
//       };
//     };
//     revision: number;
//     locale: string;
//   };
//   fields: {
//     title: string;
//     description: string;
//     file: {
//       url: string;
//       details: { size: number; image: { width: number; height: number } };
//       fileName: string;
//       contentType: string;
//     };
//   };
// }

interface Review {
  id: number;
  rating: number;
  user: {
    name: string;
    image: string | null;
  };
  review: string;
}
