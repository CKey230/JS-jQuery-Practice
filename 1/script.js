function createDiv(){
    //let newDiv = document.createElement('div');
    //document.body.append(newDiv);

    var $div = $( '<div>',{
        id: 'div',
        class: 'divClass',
        css: {
            color: 'geen',
        });
        $div.html('Hello World');
    $('body').append($div);
}