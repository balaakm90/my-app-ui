export const validateUserLogin = (props) => {
    if (props.username.toLowerCase() == 'balaakm90@gmail.com' && props.password == 'Bala@16041990') {
        return true;
    }
    else {
        return false;
    }
};

export const getBlogList = (props) => {
    return (
        [
            {
                id: 'blog001',
                title: 'My First Blog',
                desc: 'This is my first blog of nothing'
            },
            {
                id: 'blog002',
                title: 'My Second Blog',
                desc: 'This is my second blog of nothing'
            },
            {
                id: 'blog003',
                title: 'My Third Blog',
                desc: 'This is my third blog of nothing'
            },
            {
                id: 'blog004',
                title: 'My Fourth Blog',
                desc: 'This is my fourth blog of nothing'
            },
            {
                id: 'blog005',
                title: 'My Fifth Blog',
                desc: 'This is my fifth blog of nothing'
            }
        ]
    );
};

export const getHeaderListItems = (props) => {
    return (
        [
            {
                name: 'Home',
                path: 'Home'
            }, {
                name: 'Map',
                path: 'Map'
            }, {
                name: 'Contact',
                path: 'Contact'
            }
        ]
    );
};