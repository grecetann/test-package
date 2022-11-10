import axios from "axios";
import React, { useEffect, useState } from "react";
import "eurisko-platform-data-grid-react/dist/cjs/index.css";
import { Table } from "eurisko-platform-data-grid-react";

function PredifineTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`https://restcountries.com/v3.1/all`);
      setData(result.data);
    };
    getData();
  }, []);

  //   console.log(data)

  const arabic = data.map((item) => {
    return <p>{item.translations.ara.common}</p>;
  });
  const japan = data.map((item) => {
    return <p>{item?.translations?.jpn?.common}</p>;
  });
  const image = data.map((item) => {
    return (
      <img src={item?.flags?.png} alt="no picture" style={{ width: "50px" }} />
    );
  });

  return (
    <Table
      fields={[
        {
          isFieldHidden: true,
          name: "_id",
          order: 1,
          tableAttributes: {
            columnHidden: true,
            columnIdentifier: "_id",
            columnLabel: "Identifier",
            columnSearchable: false,
            columnSortable: false,
          },
        },
        {
          fieldType: "text",
          label: "Title (En)",
          lg: 6,
          name: "titleEn",
          order: 2,
          placeholder: "Title (En)",
          required: true,
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "titleEn",
            columnLabel: "Country-English",
            columnSearchable: true,
            columnSortable: true,
          },
        },

        {
          fieldType: "text",
          initialValue: false,
          name: "hasPrizes",
          order: 4,
          placeholder: "Has Prizes",
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "languageJapan",
            columnLabel: "Country-Japan",
            columnSearchable: false,
            columnSortable: false,
          },
        },

        {
          fieldType: "text",
          isFieldHidden: true,
          name: "isPublished",
          order: 5,
          placeholder: "Published",
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "images",
            columnLabel: "images",
          },
        },
      ]}
      tableData={[
        {
          _id: "5ccc1f338601f43ea21f2832",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 1,

          titleEn: arabic[0],
          languageJapan: japan[0],
          images: image[0],
          updatedBy: "62614ae850da484f7cde5f9f",
          updatedDate: "2022-09-20T10:39:52.672Z",
        },
        {
          _id: "6229e68d3bfe63c9e075d8c0",
          createdBy: "62270a0e31b69a307a3cea77",
          createdDate: "2022-03-10T11:52:45.473Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: true,
          isPublished: true,
          order: 2,
          titleAr: "adventure",
          titleEn: arabic[1],
          languageJapan: japan[1],
          images: image[1],
          updatedBy: "62270a0e31b69a307a3cea77",
          updatedDate: "2022-03-10T12:22:30.357Z",
        },
        {
          _id: "5850166c1b1a6a2336b78225",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 3,
          titleAr: "ألعاب الأكشن والإستراتيجية",
          titleEn: arabic[2],
          languageJapan: japan[2],
          images: image[2],
          updatedDate: "2022-05-16T13:40:28.567Z",
        },
        {
          _id: "6229fcc73bfe63b9d275e1d6",
          createdBy: "62270a0e31b69a307a3cea77",
          createdDate: "2022-03-10T13:27:35.796Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 4,
          titleAr: "hnyh",
          titleEn: arabic[3],
          languageJapan: japan[3],
          images: image[3],
          updatedBy: "62270a0e31b69a307a3cea77",
          updatedDate: "2022-03-10T13:27:35.796Z",
        },
        {
          _id: "627e6beac04228231d000ed5",
          createdBy: "62751c8ca4cadc499cb0a66f",
          createdDate: "2022-05-13T14:32:10.494Z",
          gradientEnd: "#1353d4",
          gradientStart: "#ffffff",
          hasPrizes: true,
          isPublished: false,
          order: 5,
          titleAr: "Giovana AR ",
          titleEn: arabic[4],
          languageJapan: japan[4],
          images: image[4],
          updatedBy: "62751c8ca4cadc499cb0a66f",
          updatedDate: "2022-05-13T14:32:32.488Z",
        },
        {
          _id: "628c96a609b02f7735307746",
          createdBy: "62751c8ca4cadc499cb0a66f",
          createdDate: "2022-05-24T08:26:14.593Z",
          gradientEnd: "#d24949",
          gradientStart: "#aa3636",
          hasPrizes: true,
          isPublished: true,
          order: 6,
          titleAr: "LATEST CAT ",
          titleEn: arabic[5],
          languageJapan: japan[5],
          images: image[5],
          updatedBy: "62388d3ff68f1e7158d1a1d0",
          updatedDate: "2022-07-06T16:40:29.220Z",
        },
        {
          _id: "628b2e1c10e1700b905ea47d",
          createdBy: "62751c8ca4cadc499cb0a66f",
          createdDate: "2022-05-23T06:47:56.809Z",
          gradientEnd: "#2f39c1",
          gradientStart: "#2712da",
          hasPrizes: true,
          isPublished: true,
          order: 7,
          titleAr: "Giovanaa AR",
          titleEn: arabic[6],
          languageJapan: japan[6],
          images: image[6],
          updatedBy: "62751c8ca4cadc499cb0a66f",
          updatedDate: "2022-06-28T09:26:06.117Z",
        },
        {
          _id: "58eb4f5147ed4c3f27e4daa4",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 8,
          titleAr: "ألعاب الرياضة والتسابق",
          titleEn: arabic[7],
          languageJapan: japan[7],
          images: image[7],
          updatedDate: "2022-05-16T13:40:28.567Z",
        },
        {
          _id: "58501cda1b1a6a2336b78227",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 9,
          titleAr: "ألعاب كزوال",
          titleEn: arabic[8],
          languageJapan: japan[8],
          images: image[8],
          updatedDate: "2022-05-16T13:40:28.567Z",
        },
        {
          _id: "5850147a1b1a6a2336b78222",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 10,
          titleAr: "RPG",
          titleEn: arabic[9],
          languageJapan: japan[9],
          images: image[9],
          updatedDate: "2022-05-16T13:40:28.567Z",
        },
        {
          _id: "5c24c98c9918fe21c45f5647",
          createdDate: "2022-05-16T13:40:28.567Z",
          gradientEnd: "#555555",
          gradientStart: "#555555",
          hasPrizes: false,
          isPublished: true,
          order: 11,
          titleAr: "Other Games",
          titleEn: arabic[10],
          languageJapan: japan[10],
          images: image[10],
          updatedDate: "2022-05-16T13:40:28.567Z",
        },
      ]}
      tableTitle="Table with Predefined"
    />
  );
}

export default PredifineTable;
