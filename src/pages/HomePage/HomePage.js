import React from "react";
import "eurisko-platform-data-grid-react/dist/cjs/index.css";
import { Table } from "eurisko-platform-data-grid-react";

const HomePage = () => {
  return (
    <Table
      add={{
        url: "cms/categories",
      }}
      allowPagination
      allowReorderableColumns
      allowResizableColumns
      allowReorderableRows
      allowSearch
      showGridlines
      scrollable
      scrollHeight={1000}
      language="ar"
      stripedRows
      edit={{
        getURL: "cms/categories/id",
        url: "cms/categories",
      }}
      fields={[
        {
          fieldType: "text",
          label: "Title (En)",
          lg: 6,
          name: "titleEn",
          order: 1,
          placeholder: "Title (En)",
          required: true,
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "titleEn",
            columnLabel: "Title",
            columnSearchable: true,
            columnSortable: true,
          },
          validations: [
            {
              errorMessage: "required",
              type: "required",
            },
          ],
          xl: 6,
          xxl: 6,
        },
        {
          fieldType: "text",
          label: "Title (AR)",
          lg: 6,
          name: "titleAr",
          order: 2,
          placeholder: "Title (AR)",
          required: true,
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "titleAr",
            columnLabel: "Title in arabic",
            columnSearchable: true,
            columnSortable: false,
          },
          validations: [
            {
              errorMessage: "required",
              type: "required",
            },
          ],
          xl: 6,
          xxl: 6,
        },
        {
          fieldType: "image",
          label: "images",
          lg: 6,
          name: "image",
          order: 2,

          required: true,
          tableAttributes: {
            columnHidden: true,
          },
          validations: [
            {
              errorMessage: "required",
              type: "required",
            },
          ],
          xl: 6,
          xxl: 6,
        },

        {
          fieldType: "toggle",
          initialValue: false,
          name: "hasPrizes",
          order: 2,
          placeholder: "Has Prizes",
          tableAttributes: {
            columnDisplayProps: {
              colors: {
                false: "var(--bs-danger)",
                true: "var(--bs-success)",
              },
              labels: {
                false: "Lost",
                true: "Won",
              },
            },
            columnHidden: false,
            columnIdentifier: "hasPrizes",
            columnLabel: "Win Prizes",
            columnSearchable: false,
            columnSortable: false,
          },
        },
        {
          fieldType: "toggle",
          isFieldHidden: true,
          name: "isPublished",
          order: 3,
          placeholder: "Published",
          tableAttributes: {
            columnDisplayProps: {
              colors: {
                false: "var(--bs-gray)",
                true: "var(--bs-primary)",
              },
              labels: {
                false: "Draft",
                true: "Published",
              },
            },
            columnHidden: false,
            columnIdentifier: "isPublished",
            columnLabel: "Status",
            columnSearchable: false,
            columnSortable: false,
          },
        },
        {
          fieldType: "date",
          isFieldHidden: true,
          name: "updatedDate",
          order: 4,
          tableAttributes: {
            columnHidden: false,
            columnIdentifier: "updatedDate",
            columnLabel: "Update Date",
            columnSearchable: false,
            columnSortable: false,
          },
        },

        {
          fieldType: "color",
          label: "Gradient Start",
          lg: 6,
          name: "gradientStart",
          order: 7,
          required: true,
          tableAttributes: {
            columnHidden: true,
          },
          validations: [
            {
              errorMessage: "required",
              type: "required",
            },
          ],
          xl: 6,
          xxl: 6,
        },
        {
          fieldType: "color",
          label: "Gradient End",
          lg: 6,
          name: "gradientEnd",
          order: 8,
          required: true,
          tableAttributes: {
            columnHidden: true,
          },
          validations: [
            {
              errorMessage: "required",
              type: "required",
            },
          ],
          xl: 6,
          xxl: 6,
        },
      ]}
      filterFields={[
        {
          fieldType: "text",
          initialValue: "",
          label: "Filter By Title",
          name: "title",
          order: 1,
          placeholder: "Filter By Title",
        },
        {
          fieldType: "select",
          initialValue: null,
          label: "Filter By Prize",
          name: "prizes",
          options: [
            {
              label: "Won",
              value: "Won",
            },
            {
              label: "Lost",
              value: "Lost",
            },
          ],
          order: 2,
          placeholder: "Filter By Prize",
          validations: [
            {
              type: "nullable",
            },
          ],
        },
        {
          fieldType: "select",
          initialValue: null,
          label: "Filter By Status",
          name: "status",
          options: [
            {
              label: "Published",
              value: "Published",
            },
            {
              label: "Draft",
              value: "Unpublished",
            },
          ],
          order: 3,
          placeholder: "Filter By Status",
          validations: [
            {
              type: "nullable",
            },
          ],
        },
      ]}
      getURL="https://wizzo-api.eurisko.me/categories/test"
      limits={[1, 4, 5, 9, 11, 20]}
      searchPlaceholder="Start searching"
      tableTitle="Categories"
      headerCustomActions={[
        {
          action: "activate",
          bodyKey: "categoryIds",
          label: "Publish Category(ies)",
          method: "put",
          modalText:
            "Are you sure that you want to activate the selected rows?",
          modalTitle: "Activate",
          permission: "canActivate",
          url: "cms/categories/publish",
        },
        {
          action: "deactivate",
          bodyKey: "categoryIds",
          label: "Unpublish Category(ies)",
          method: "put",
          modalText:
            "Are you sure that you want to deactivate the selected rows?",
          modalTitle: "Deactivate",
          permission: "canDeactivate",
          url: "cms/categories/unpublish",
        },
        {
          action: "delete",
          bodyKey: "categoryIds",
          label: "Delete Category(ies)",
          method: "delete",
          modalText: "Are you sure that you want to delete the selected rows?",
          modalTitle: "Delete",
          permission: "canDelete",
          url: "cms/categories",
        },
        {
          action: "exportCSV",
          label: "CSV",
          method: "get",
          modalText:
            "Are you sure that you want to export the selected rows as csv?",
          modalTitle: "Export CSV",
          permission: "canExport",
          url: "",
        },
        {
          action: "exportExcel",
          label: "Excel",
          method: "get",
          modalText:
            "Are you sure that you want to export the selected rows as excel?",
          modalTitle: "Export Excel",
          permission: "canExport",
          url: "",
        },
        {
          action: "exportPDF",
          label: "PDF",
          method: "get",
          modalText:
            "Are you sure that you want to export the selected rows as pdf?",
          modalTitle: "Export PDF",
          permission: "canExport",
          url: "",
        },
      ]}
      permissions={[
        "canAdd",
        "canEdit",
        "canDelete",
        "canView",
        "canExport",
        "canActivate",
        "canDeactivate",
      ]}
      reorderTableApi="cms/categories/reorder"
      reorderTableKey="reorderedCategories"
      tableActionsWidth={150}
      view={{
        getURL: "cms/categories/id",
      }}
    />
  );
};

export default HomePage;
