$(function () {

    // // Items to select
    var items = [
        {value: 01, text: 'Website'},
        {value: 02, text: 'Javascript'},
        {value: 03, text: 'Html'},
        {value: 04, text: 'Css'},
        {value: 05, text: 'Python'},
        {value: 06, text: 'Bootstrap'},
        {value: 07, text: 'PHP'},
        {value: 08, text: 'Laravel'},
        {value: 09, text: 'Web Design'},
        {value: 10, text: 'Web Development'},
        {value: 11, text: 'Graphic Design'},
        {value: 12, text: 'Logo Design'},
        {value: 13, text: 'Photography'},
        {value: 14, text: 'AI'}
    ];

    // Initialize paraia-multi-select
    var select = $('[data-paraia-multi-select="true"]').paraia_multi_select({
        multi_select: true,
        items: items,
        defaults: [],
        rtl: true
    });

});