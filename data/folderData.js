const files = {

    name: 'root',
    isFolder: true,
    items :[
        {
        name: 'public',
        isFolder: true,
        items :[
            {
                name: 'public nested 1',
                isFolder: true,
                items :[
                    {
                        name: 'index.html',
                        isFolder: false,     
                    },
                    {
                        name: 'root',
                        isFolder: false,
                    }
                ]
            },
            ]
    },
    {
        name: 'data',
        isFolder: false,
    },
        {
        name: 'src',
        isFolder: true,
        items :[
            {
                name: 'src assets 1',
                isFolder: true,
                items :[
                    {
                        name: 'css.style',
                        isFolder: false,     
                    },
                    {
                        name: 'js',
                        isFolder: false,
                    }
                ]
            },
            ]
    },
    {
        name: 'package.json',
        isFolder: false,
    }
    ]
}

// module.exports = {files}
// export default files;