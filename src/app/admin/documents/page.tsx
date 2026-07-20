import DocumentManager from "./DocumentManager";

export default async function DocumentsAdminPage() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 min-h-[500px] border border-gray-150">
      <h1 className="text-3xl font-extrabold text-[#0F2747] mb-2">Document Library</h1>
      <p className="text-gray-650 mb-8">
        Upload official school PDFs, templates, certificates, and files. Copy their public links to use and link them anywhere on the website.
      </p>
      
      <DocumentManager />
    </div>
  );
}
