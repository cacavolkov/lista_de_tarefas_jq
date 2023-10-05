$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        var task = $('#taskInput').val();
        $('#taskList').append('<li>' + task + '</li>');
        $('#taskInput').val('');
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('done');
    });
});