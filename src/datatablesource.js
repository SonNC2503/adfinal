export const userColumns = [
    { field: "id", headerName: "ID", width: 240 },
    {
        field: "fullname",
        headerName: "Username",
        width: 160,
        /*renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },*/
    },
    {
        field: "email",
        headerName: "Email",
        width: 150,
    },

    {
        field: "address",
        headerName: "Address",
        width: 250,
    },

    {
        field: "age",
        headerName: "Age User",
        width: 80
    },
    {
        field: "phoneNumber",
        headerName: "User Phone",
        width: 150,
    }

];

export const productColumns = [
    { field: "id", headerName: "ID", width: 200 },
    {
        field: "product_name",
        headerName: "Product Name",
        width: 240,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.product_img} alt="avatar" />
                    {params.row.product_name}
                </div>
            );
        },
    },
    {
        field: "product_brand",
        headerName: "Product Brand",
        width: 150,
    },
    {
        field: "product_type",
        headerName: "Product Type",
        width: 150,
    },
    {
        field: "product_price",
        headerName: "Product Price",
        width: 150,
    }
];

export const newColumns = [
    { field: "id", headerName: "ID", width: 200 },
    {
        field: "new_title",
        headerName: "Newspaper Name",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.new_img} alt="avatar" />
                    {params.row.new_title}
                </div>
            );
        },
    },
    {
        field: "new_content",
        headerName: "News Content",
        width: 200,
    },

    {
        field: "new_subtitle",
        headerName: "News Suptitle",
        width: 220,
    },

    {
        field: "new_type",
        headerName: "News Type",
        width: 150,
    },
];


export const categoryColumns = [
    { field: "id", headerName: "ID", width: 230 },
    {
        field: "category_name",
        headerName: "Category Name",
        width: 240,
    },
];

export const aboutUsColumns = [
    { field: "id", headerName: "ID", width: 230 },
    {
        field: "au_title",
        headerName: "Title Name",
        width: 250,
    },
    {
        field: "au_content",
        headerName: "Content",
        width: 550,
    }

];

export const supportColumns = [
    { field: "id", headerName: "ID", width: 230 },
    {
        field: "sp_title",
        headerName: "Title Name",
        width: 250,
    },
    {
        field: "sp_content",
        headerName: "Support Content",
        width: 550,
    }

];