$(document).ready(function () {
    $('#example').DataTable({
        "language": {
            "decimal": "",
            "emptyTable": "No data available in table",
            "info": "Показано _START_/_END_ из найденых _TOTAL_ записей",
            "infoEmpty": "Совпадающих записей не найдено",
            "infoFiltered": "(Всего _MAX_ записей)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Показать _MENU_ записей",
            "loadingRecords": "Загрузка...",
            "processing": "Поиск...",
            "search": "Поиск:",
            "zeroRecords": "Совпадающих записей не найдено",
            "paginate": {
                "first": "Первая",
                "last": "Последняя",
                "next": "Следующая",
                "previous": "Предыдущая"
            }
        }
    });
});