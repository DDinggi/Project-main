import React, { useState, useEffect } from "react";
import CommonTable from "./table/CommonTable.jsx";
import CommonTableColumn from "./table/CommonTableColumn.jsx";
import CommonTableRow from "./table/CommonTableRow.jsx";
import { postList } from "../PostData.js";

const PostList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <>
      <CommonTable headersName={["글번호", "제목", "등록일", "조회수"]}>
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.title}</CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </>
  );
};

export default PostList;
