export default {
  recs: [],
  isLoading: false,
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  cols: [
    {
      name: 'edit',
      align: 'left',
      field: 'edit',
      width: '34px',
    },
    {
      name: 'name',
      label: 'Name',
      align: 'left',
      field: 'name',
      sortable: true,
    },
    {
      name: 'desc',
      label: 'Desc',
      align: 'left',
      field: 'desc',
      sortable: true,
    },
    {
      name: 'img',
      label: 'Image',
      align: 'left',
      field: 'img',
      sortable: true,
    },
    {
      name: 'nameMainCategory',
      label: 'Main Category',
      align: 'left',
      field: 'nameMainCategory',
      sortable: true,
    },
  ],
}
