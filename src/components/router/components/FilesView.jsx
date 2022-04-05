import React, { useState } from "react";
import { Modal, Button } from "antd"
import wordFile from '../../../assets/111.docx'
import jianliFile from '../../../assets/韦永愿_前端开发_3年.pdf'
import xlsxFile from '../../../assets/112.xlsx'
//react文件预览支持docx，xlsx
import FileViewer from 'react-file-viewer';
//react预览pdf文件插件
import PDF from 'react-pdf-js';
function destroyAll() {
  Modal.destroyAll();
}
function FilesView() {
  const [visible, setVisible] = useState(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const onClear = () => {
    setVisible(0);
    setPage(1);
    setPages(null)
    destroyAll();
  }
  return <div>
    <Button onClick={() => setVisible(1)}>我的简历</Button>
    <Button onClick={() => setVisible(2)}>文档</Button>
    <Button onClick={() => setVisible(3)}>表格</Button>
    <Modal
      visible={visible}
      title='文件预览'
      onCancel={onClear}
      onOk={onClear}
      width="700px"
    >
      {
        visible === 1 && <>
          <PDF file={jianliFile} page={page} onDocumentComplete={(info) => {
            console.log("文件大小", info)
            if (info && info > 1) {
              setPages(info)
            }
          }} />
          {
            pages && <p className="file-view-paging">
              {(page === pages || (page < pages && page !== 1)) && <span onClick={() => {
                setPage(page - 1)
              }}>上一页</span>}
              {page < pages && <span
                onClick={() => {
                  setPage(page + 1)
                }}
              >下一页</span>}
              <span>共{pages}页</span>
            </p>
          }
        </>
      }
      {
        visible === 2 && <FileViewer fileType='docx' filePath={wordFile} />
      }
      {
        visible === 3 && <FileViewer fileType='xlsx' filePath={xlsxFile} />
      }
    </Modal>
  </div>
}

export default FilesView