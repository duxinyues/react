import React, { useEffect, useState } from 'react'
// 引入编辑器组件
import BraftEditor from 'braft-editor'
import CodeHighlighter from "braft-extensions/dist/code-highlighter"
// 引入编辑器样式
import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/code-highlighter.css'
BraftEditor.use(CodeHighlighter({
  includeEditors: ['editor-with-code-highlighter'],
}))

export default function Editor() {
  const [editorState, setEditorState] = useState(BraftEditor.createEditorState());
  const [defualtContent, setDefualtContent] = useState("<div></div>");
  useEffect(() => {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
    // const sss = BraftEditor.createEditorState("");
    setEditorState(BraftEditor.createEditorState())
  }, [])
  const handleEditorChange = (editorState) => {
    const htmlContent = editorState.toHTML();
    setEditorState(editorState);
    setDefualtContent(htmlContent)
  }
  // 编辑保存
  const submitContent = () => {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = editorState.toHTML();
    console.log(htmlContent)
  }
  return <React.Fragment>
    <div className="editor-content">
      <div className="my-component">
        <BraftEditor
          className="yyyy"
          value={editorState}
          onChange={handleEditorChange}
          onSave={submitContent}
        />
      </div>
      <div className="review" dangerouslySetInnerHTML={{ __html: defualtContent }}></div>
    </div>

  </React.Fragment>
}
