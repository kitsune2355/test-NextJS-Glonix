"use client";

import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.styled.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  return (
    <div className="w-full">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        theme="snow"
        className="custom-quill"
      />
    </div>
  );
};

export default TextEditor;
