$(function() {

    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        $.toast({
            heading: 'Copied',
            text: 'The Opentrack code [' + e.text + '] is now in your clipboard',
            icon: 'success',
            position: 'mid-center', 
            loaderBg: '#9EC600', 
            stack: 'false',
            hideAfter: 5000
        });
    });
    clipboard.on('error', function(e) {
        $.toast({
            heading: 'Cannot Copy',
            text: 'I cannot copy the code for you. Please do it yourself.',
            icon: 'error',
            position: 'mid-center', 
            stack: 'false',
            hideAfter: 5000
        });        
    });
    $('.key').on('mouseenter', function(event){
        $(event.target.children).css('visibility', 'visible');
    });
    $('.key').on('mouseleave', function(event){
        $('.btn').css('visibility', 'collapse');
    });
});

